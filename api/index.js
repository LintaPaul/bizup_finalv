// Create express instnace
const express=require('express');
const bodyParser=require("body-parser");
const session = require('express-session');
const app = express();
const connectDB=require('./db');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes
const users = require('./routes/users')


// Use API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
//const port=process.env.PORT || 3000;
//app.listen(port,()=>console.log(`server started listening on ${port}`));