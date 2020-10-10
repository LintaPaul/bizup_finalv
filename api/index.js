// Create express instnace
const express=require('express');
const app = express()
const connectDB=require('./db');
// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
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