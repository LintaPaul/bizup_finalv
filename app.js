const express = require('express');
const connectDB=require('./connection');
const app= express();
connectDB();
app.use('/api/userModel',require('./'))
const Port=process.env.Port || 3000;
app.listen(Port,()=>console.log("server started"));
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-usertype', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('users_details').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.get('/view-usertype',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('users_details').find({}).toArray().then(function(users) {
            res.status(200).json(users);
        });
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );*/