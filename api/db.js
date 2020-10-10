const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://adminroot:admin1107@cluster-base.frs5y.mongodb.net/biz_datas?retryWrites=true&w=majority', {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true
                          });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db