<template>
<section>
  <Headers/>
  <div class="container">
    <br><br>
    <div class="row">
      
    <h3>View your connections in Bizup and keep your relations alive...</h3>
                  <div>
                    <button class="optbtns" @click="redfeeds">Go to feeds</button>
                    <button class="optbtns1" @click="gotoinbox">View my inbox</button>
                  </div>
   <div class="col-12">
               <div v-for="user_alias in User">
                      <div v-show="user_alias._id===id">
                        
                               
                                         <div class="col-6">
                                          <div class="card">
                                              <div v-for="uf in user_alias.friends">
                                          <div class="card-body">
                                                 <div v-for="fruser in User" v-if="fruser._id===uf">
                                                 <h5 class="card-title">{{fruser.ename}}</h5>
                                                 <h6 class="card-subtitle text-muted">{{fruser.address}}<br>{{fruser.email}}<br>{{fruser.phone}}</h6>
                                                      <button class="btn" @click="passonid(fruser._id)">Message them</button>
                             
                                                  </div></div>
                                          </div><!--card body--> 
                                        </div><!--card-->
                                          </div>
                                          
                                 </div><!--v-for inner-->
                         
                      </div><!--show-->
               </div><!--outerloop-->
            </div><!--col-->
            <div class="col-4 offset-4 card" style="margin-top:-15%;" v-show="displaytxt">
                <h4> The message box</h4>
              <form method="POST" action="">
                <textarea class="form-control" placeholder="enter your message" v-model="form.text">
                  </textarea>
                  <br><br>
                  <button class="btn" @click="gotomessage()">Send message</button>
                  <button class="btn" @click="txtdisappear()">Cancel</button>
                </form>
            </div>
            <div class="col-6">
              
            </div>
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
   name: 'use5',
    data(){
        return{
            User: [],
            form:{
              text:""
            },
            id:this.$route.query.id,
            lguser:[],
            displaytxt:false,
            sender:"",
            sendername:""
           
        }
    },
    mounted: function()
{  this.getloggeduser(this.id),
   this.generateprofile()
},

methods:{
  txtdisappear(){
    this.displaytxt=false
  },
  passonid(val){
    console.log(val);
     this.displaytxt=true;
     this.sender=val;
     
  },
 gotomessage:function(){
     let requests={
    sender:this.id,
    receive:this.sender,
    txt:this.form.text,
   }
  console.log(requests);
  axios.post('http://localhost:3000/api/users/addmessage',requests).then((response)=>{
    //console.log(response);
    alert(response.data.message);
  }).catch(error=>{
      alert(error);
  })
 },
  getloggeduser:function(id)
{
  let newuser={
    id:this.id
  }
  console.log(newuser);
  axios.post('http://localhost:3000/api/users/idsearch',newuser).then((response)=>{
     this.lguser=response.data;
  }).catch((error)=>{
    console.log(error);
  })
},
 generateprofile:function()
  {
    axios.get('http://localhost:3000/api/users').then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
  },
  redfeeds(){
    location.replace(`/feednew?id=${this.id}`);
  },
  gotoinbox(){
    location.replace(`/inbox?id=${this.id}`);
  }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: justify;
  align-items: center;
  text-align: center;
  background: white !important;
  background-size: 100% !important;
  overflow: visible;
  margin-top: 0px;
  background-color: black;
}
.row{
 
   position: absolute;
  top: 70px;
  padding-top:30px;
  height: 100%;
 
}
.col-12{
  position:absolute;
  left:0%;
  top:20%;
  bottom:45%;
  right:20%;

}
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
.btn{
  background-color: #93D;
  color: white;
  border:none;
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
  position: absolute;
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
.maintitle{
  position: absolute;
  top:130px;
}
.optbtns{
  margin:4px;
  padding:4px;
  background-color: #93D;
  color:white;
  border:none;
  border-radius:10px;
  position:absolute;
  left:0px;
  top:0px;
}
.optbtns1{
  margin:4px;
  padding:4px;
  background-color: #93D;
  color:white;
  border:none;
  border-radius:10px;
  position:absolute;
  right:0px;
  top:0px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
    }}
</style>