const config = require('../config')
const User = require('../models/users')
const validator = require('express-validator')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
const users = require('../models/users');
//profile
// Get one
module.exports.show1 = function(req, res) {
  var id= req.params.id;
  User.findOne({_id:ObjectId(id)}, function(err, user){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      if(!user) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
      return res.json(user);
  });
}


// Get all
module.exports.list = function (req, res, next) {
  User.find({}, function(err, users){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(users);
  });
}
// Get one
module.exports.show = function(req, res) {
  var category = req.params.category;
  User.findOne({category: cat}, function(err, user){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      if(!user) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
      return res.json(user);
  });
}

// Get one2
module.exports.show = function(req, res) {
  var category = req.params.cat;
  User.findOne({category: "Agriculture"}, function(err, user){
      if(err) {
          return res.status(500).json({
              message: 'Error getting record.'
          });
      }
      if(!user) {
          return res.status(404).json({
              message: 'No such record'
          });
      }
      return res.json(user);
  });
}

// Register
module.exports.register = [
  // validations rules
  validator.body('ename', 'Please enter enterprise Name').isLength({ min: 1 }),
  validator.body('email', 'Please enter Email').isLength({ min: 1 }),
  validator.body('email').custom(value => {
    return User.findOne({email:value}).then(user => {
      if (user !== null) {
        return Promise.reject('Email already in use');
      }
    })
  }),
  validator.body('password', 'Please enter Password').isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    // initialize record
    var user = new User({
        usertype:req.body.usertype,
        ename : req.body.ename,
        about:req.body.about,
        category:req.body.category,
        preference:req.body.preference,
        address:req.body.address,
        location:req.body.location,
        phone:req.body.phone,
        email : req.body.email,
        username:req.body.username,
        password : req.body.password,
    })

    // encrypt password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash

    // save record
    user.save(function(err, user){
        if(err) {
            return res.status(500).json({
                message: 'Error saving record',
                error: err
            });
        }
        
        return res.json({
            message: 'saved',
            _id: user._id
        });
    })
  }
]
//category
module.exports.category = [
  function(req, res) {
    const id = req.body.id;
    User.findOne({_id: ObjectId(id)}, function(err, user){
        if(err) {
            return res.status(500).json({
                message: 'Error getting record.'
            });
        }
        if(!user) {
            return res.status(404).json({
                message: 'No such record'
            });
        }
        return res.json(user);
    });
  }
]

//requests
module.exports.creq = [
     function(req,res,next) {
       const sender=req.body.sender;
       const receiver=req.body.receive;
      User.updateOne({_id:ObjectId(receiver)},{$push: {requests:sender,},} ,{upsert:true},function(err, users){
        if(err) {
            return res.status(500).json({
                message: 'Error getting records.'
            });
        }
        return res.json({
          message:"request sent!!"
        });
      });
     }
]
//addfriends
module.exports.cfriends = [
  function(req,res,next) {
    const sender=req.body.sender;
    const receiver=req.body.receive;
   User.updateOne({_id:ObjectId(sender)},{$push: {friends:receiver,},} ,{upsert:true},function(err, users){
     if(err) {
         return res.status(500).json({
             message: 'Error getting records.'
         });
     }
     return res.json({
       message:"Added to your contacts in bizup!!"
     });
   });
  }
]
//removerequests
module.exports.remreq = [
  function(req,res,next) {
    const sender=req.body.sender;
    const receiver=req.body.receive;
   User.updateOne({_id:ObjectId(sender)},{$pull: { requests:receiver,},},{new:true},function(err, users){
     if(err) {
         return res.status(500).json({
             message: 'Error getting records.'
         });
     }
     return res.json({
       message:"This request removed!!"
     });
   });
  }
]

// Login
module.exports.login = [
  // validation rules
  validator.body('username', 'Please enter username').isLength({ min: 1 }),
  validator.body('password', 'Please enter Password').isLength({ min: 1 }),

  function(req, res) {
    // throw validation errors
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    // validate email and password are correct
    User.findOne({username: req.body.username}, function(err, user){
        if(err) {
            return res.status(500).json({
                message: 'Error logging in',
                error: err
            });
        }

        if (user === null) {
          return res.status(500).json({
            message: 'username you entered is not found.'
          });
        }
        // compare submitted password with password inside db
        return bcrypt.compare(req.body.password, user.password, function(err, isMatched) {
          if(isMatched===true){
            return res.json({
              user: {
                _id: user._id,
                username: user.username
             },
              token: jwt.sign({_id: user._id,username: user.username}, config.authSecret) // generate JWT token here
            });
            
          }
          else{
            return res.status(500).json({
              message: 'Invalid Email or Password entered.'
            });
          }
          
        });
    });
  }
]

// Get User
module.exports.user = function(req, res) {
  var token = req.headers.authorization
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function(err, decoded) {
      if (err) {
        return res.status(401).json({message: 'unauthorized'})
      } else {
        return res.json({ user: decoded })
      }
    });
  }
  else{
    return res.status(401).json({message: 'unauthorized'})
  }
}

// Get all
module.exports.list = function (req, res, next) {
  User.find({}, function(err, user){
    if(err) {
        return res.status(500).json({
            message: 'Error getting records.'
        });
    }
    return res.json(user);
  });
}
//editprofile
module.exports.eprofile = [
  function(req,res,next) {
    const sender=req.body.id;
    const name=req.body.ename;
    const des=req.body.about;
    const add=req.body.address;
    const loc=req.body.location;
    const pho=req.body.phone;
    const cat=req.body.category;
    const pre=req.body.preference;
    const mail=req.body.email;

   User.updateOne({_id:ObjectId(sender)},{$set:{ ename:name ,about:des,address:add,location:loc,phone:pho,category:cat,preference:pre,email:mail,},} ,{upsert:true},function(err, users){
     if(err) {
         return res.status(500).json({
             message: 'Error getting records.'
         });
     }
     return res.json({
       message:"Your profile has been updated!!"
     });
    });
  }
]

