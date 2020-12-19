<template>
 <section>
  
    <Headers />

    <div v-if="cat.usertype==='Investor'||cat.usertype==='Startup'">
      <h4 style="position:absolute;margin-top:-16%;">You are viewing recommendations on your category {{cat.category}} and your preferred choices {{cat.preference}}</h4>
    </div>
    <div v-else><h4 style="position:absolute;margin-top:-16%;">You are viewing recommendations as per your preferences {{cat.preference}}</h4></div>
    <div class="container">
      
      <div class="row">
          
                
            <div class="col-6"  style="margin-top:-20%;">
            
            <div v-for="user_alias in User">
                  <div v-if="cat.usertype==='Investor'|| cat.usertype==='Startup'">
                <div v-if="user_alias._id!=id && checkifreq(cat._id,user_alias.requests)===true && checkiffriends(user_alias._id,cat.friends)===true
                       && checkifreq(user_alias._id,cat.requests)===true">
                   <div  v-for="p in cat.preference" >
                    
                         
                     <div v-if="p==='Marketing' || p==='Infra' || p==='Tech'">
                      <div v-if="user_alias.usertype===p">
                         
                        <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">{{user_alias.ename}}</h5>
                              <span class="card-subtitle mb-2 text-muted">Location:{{user_alias.location}}</span><br>
                              <span class="card-subtitle mb-2 text-muted" >Contact:{{user_alias.phone}}</span><br>
                              <span class="card-subtitle mb-2 text-muted" >Usertype:{{user_alias.usertype}}</span>
                              <p class="card-text">{{user_alias.about}}</p>
                              <button  v-on:click="sendreq(user_alias._id)" class="optbtns">Interested</button>
                              
                          </div><!--card-body-->
                       </div><!--card-->
                       </div><!--usertype-->
                       </div><!--mark/tech/infra-->
                       <div v-if="p==='Investor' || p==='Startup'">
                         <div v-for="c in cat.category" v-if="user_alias.category===c">
                          <div v-if="user_alias.usertype===p">
                         <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">{{user_alias.ename}}</h5>
                              <span class="card-subtitle mb-2 text-muted">Location:{{user_alias.location}}</span><br>
                              <span class="card-subtitle mb-2 text-muted" >Contact:{{user_alias.phone}}</span><br>
                              <span class="card-subtitle mb-2 text-muted" >Usertype:{{user_alias.usertype}}</span>
                              <p class="card-text">{{user_alias.about}}</p>
                              <button  v-on:click="sendreq(user_alias._id)" class="optbtns">Interested</button>
                              
                          </div><!--card-body-->
                       </div><!--card-->
                       </div><!--v-if p-->
                       </div><!--v-if category-->
                       </div><!--v-if inv/startup-->
                    </div>
                  </div>
               </div>
            
                  <div v-if="cat.usertype==='Infra'||cat.usertype=='Tech'||cat.usertype==='Marketing'">
                    <div v-for="p in cat.preference">
                      <div v-if="user_alias.usertype===p&& checkifreq(cat._id,user_alias.requests)===true && checkiffriends(user_alias._id,cat.friends)===true
                       && checkifreq(user_alias._id,cat.requests)===true ">
                          <div class="card">
                          <div class="card-body">
                              <h5 class="card-title">{{user_alias.ename}}</h5>
                              <span class="card-subtitle mb-2 text-muted">Location:{{user_alias.location}}</span><br>
                              <span class="card-subtitle mb-2 text-muted" >Contact:{{user_alias.phone}}</span><br>
                              <span class="card-subtitle mb-2 text-muted" >Usertype:{{user_alias.usertype}}</span>
                              <p class="card-text">{{user_alias.about}}</p>
                              <button  v-on:click="sendreq(user_alias._id)" class="optbtns">Interested</button>
                              
                          </div><!--card-body-->
                       </div>
                      </div>
                    </div>
               </div>
            </div>
            </div>

           
              
            
            
                   <div class="col-6" style="width:600px;margin-top:-20%;">
              <div class="card">
                <button class="optbtns" @click="gotoprofile">View my Profile</button>
                <button class="optbtns" @click="gotochats">View contacts</button>
                <button class="optbtns" @click="gotorequests"> View requests</button>
              </div>
            </div><!--col-6-2-->
        </div><!--row-->
        </div><!--container-->
    
    
    
  </section>
</template>

<script>
import Headers from "../components/Header.vue";
import Footers from "../components/Footer.vue";
import axios from 'axios';
import {Router} from "vue-router";

export default {
  components: {
    Headers,
    Footers
  },
   name: "users",
    data(){
        return{
            User: [],
            search:"",
           id:this.$route.query.id,
            cat:[]
        }
    },
    mounted: function()
{
    this.getloggeduser(this.id),
    this.generateSlip(this.cat.category)
},

  methods:{
    checkifreq:function(id,reqs){
      for(var i in reqs){
        if(id===reqs[i])
        return false;
      }
      return true;
    },
    checkiffriends:function(id,frds){
      for(var j in frds){
        if(id===frds[j])
        return false;
      }
      return true;
    },
getloggeduser:function(id)
{
  let newuser={
    id:this.id
  }
  console.log(newuser);
  axios.post('http://localhost:3000/api/users/idsearch',newuser).then((response)=>{
     this.cat=response.data;
  }).catch((error)=>{
    console.log(error);
  })
},
generateSlip:function(search)
{
axios.get('http://localhost:3000/api/users').then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
},
sendreq:function(receiver)
{
  let requests={
    sender:this.id,
    receive:receiver
  }
  console.log(requests);
  axios.post('http://localhost:3000/api/users/req',requests).then((response)=>{
    console.log(response);
    alert(response.data.message);
  }).catch(error=>{
      alert(error);
  })
},

gotoprofile(){
  location.replace(`/profile?id=${this.id}`);
},
gotochats(){
  location.replace(`/chat?id=${this.id}`);
},
gotorequests(){
  location.replace(`/requests?id=${this.id}`);
}
/*sendreq:function(userid){
     var sender= this.id;
    var receive= userid;
    let reqnew={
      userid:sender,
      reqid:receive,

    }
    axios.post('http://localhost:3000/api/users/creq',reqnew).then((response)=>{
        console.log(reqnew);
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })
}*/
}

};

</script>

<style scoped >
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white !important;
  background-size: 100% !important;
  overflow: visible;
  margin-top: 0px;
  background-color: black;
}
.row{
  
   position: relative;
  top: 70px;
  padding-top:30px;
  height: 100%;
  
}
/*.col-md-4{
  position:absolute;
  left:80%;
  bottom:45%;
  right:20%;

}*/
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
/* Header/Blog Title */
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  position: relative;
  float: right;
  width: 75%;
  text-align: left;
  
}
/* Right column */
.rightcolumn {
 
  float: left;
  position:relative;
  width: 35%;
  padding: 15px;
  border-style: double;
  border-color: #93D;

}
/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  height: 200px;
  padding: 20px;
}
/* Add a card effect for articles */
.card {
  position: relative;
  background-color: rgb(250, 244, 244);
  padding: 20px;
  margin-top: 10px;
  border-radius: 5px;
}
.card a {
  color: #93D;
  font-size: 1 rem;
  font-weight: bold;
  text-decoration: none;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Footer */
.a {
  text-decoration: none;
}
a:hover {
  color: #ff8000;
}
.sidebar {
  position: fixed;
  transform: translateX(-30rem);
  width: 30rem;
  background-color: wheat;
  height: 100%;
}
.sidebar.open {
  transform: translateX(0);
}
.sidebar-close-button {
  border-radius: 50%;
  border: 0.1rem black solid;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  font-size: 2rem;
  padding-top: 0;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 1.5rem;
}
.brand a {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
}
.optbtns{
  margin:4px;
  padding:4px;
  background-color: #93D;
  color:white;
  border:none;
  border-radius:10px;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>
