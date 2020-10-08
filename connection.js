const mongoose=require('mongoose');
const uri="mongodb+srv://adminroot:admin1107@cluster-base.frs5y.mongodb.net/biz_datas?retryWrites=true&w=majority";
const connectDB=async()=>{
    await mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true});
    console.log('db connected');
}
module.exports = connectDB;