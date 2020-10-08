const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adminroot:admin1107@cluster-base.frs5y.mongodb.net/users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});