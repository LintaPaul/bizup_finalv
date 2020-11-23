<template>
    <section>
  <Headers/>
  <button class="optbtns" style="margin-top:7%;" @click="redfeeds">Go back to feeds</button>
  <div class="container">
      
     <div class="row" style="margin-bottom:40%;">
       <h3>View messages sent to you from friends in Bizup and schedule meetings here..</h3>
          <div v-for="user_alias in User">
              <div v-show="user_alias._id==id">
                  <div v-for="q in user_alias.message">
                        <div v-for="requser in User">
                            <div v-if="requser._id==q.fromid">
                                <div class="card col-12">
                                    <div class="card-title">{{requser.ename}}</div>
                                    <span class="card-subtitle mb-2 text-muted" >Message:{{q.text}}</span><br>
                                   
                                     
                                       <button style="background-color:#93D;color:white;" @click="callboth(requser._id,q.text)">Mark as read</button>
                                       <a href="https://meet.google.com" target="blank" class="card-link">Click to schedule meeting</a></div>
                                        </div>
                                        
                                
                            </div>
                            </div>
                     </div>
              </div>
          </div>
      </div>
    
  </div><!--container-->
</section>
</template>
<script>
import Headers from "../components/Header.vue";
import axios from 'axios';
import {Router} from "vue-router";
export default {
    components: {
    Headers,
  },
 mounted: function()
{
   this.generatereq(this.id) 
},
   name: 'use5',
    data(){
        return{
            User: [],
            id:this.$route.query.id
            
        }
    },
methods:{
   callboth:function(id,txt){
     
     this.removefromrequests(id,txt);
   },
  generatereq:function(id)
  {
    axios.get('http://localhost:3000/api/users?id='+ id).then((response)=>{
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
  
  removefromrequests(receiver,txt){
    let posts={
    sender:this.id,
    receive:receiver,
    text1:txt,
   }
  console.log(posts);
  axios.post('http://localhost:3000/api/users/remsg',posts).then((response)=>{
    console.log(response);
    alert(response.data.message);
  }).catch(error=>{
      alert(error);
  })
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
 
   position: relative;
  top:-10px;
  padding-top:0px;

 
}
.col-12{
  position:relative;
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
.links {
  padding-top: 15px;
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
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
    }}
</style>