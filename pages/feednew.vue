<template>
  <section>
  

    <div class="container">
      <Headers />
      <div class="row">
          <div class="col-md-6">
            <div>
              View recommendations by category
              <select v-model="search">
                  <option :value="n" v-for="n in ['please select','Handloom','Agriculture','Pottery','Web/App services','Marketing']">{{n}}</option>
              </select>
              </div>
              <div class="alignBtn">
                  <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateSlip()" value="Submit" />
                   </label>
               </div>
            <div v-for="user_alias in User">
                <div v-show="user_alias.category===search">
                       
                      <div class="card" style="width:100%;">
  <div class="card-body">
    <h5 class="card-title">{{user_alias.ename}}</h5>
    <span class="card-subtitle mb-2 text-muted">Location:{{user_alias.location}}</span><br>
    <span class="card-subtitle mb-2 text-muted" >Contact:{{user_alias.phone}}</span>
    <p class="card-text">{{user_alias.about}}</p>
    <a href="#" class="card-link">Interested</a>
    <a href="#" class="card-link">Not interested</a>
  </div>
</div>
                  </div>
               </div>
            </div>
            <div class="col-md-4 offset-2">
              <div class="card">
                <button class="optbtns" @click="gotoprofile">View my Profile</button>
                <!--<button class="optbtns" @click="gotorequests">View new requests</button>
                <button class="optbtns" @click="gotochats">View contacts</button>-->
              </div>
            </div>
        </div>
        
    </div>
    <!--</div>-->
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
   name: 'use4',
    data(){
        return{
            User: [],
            search:"",
            id:this.$route.query.id
            
        }
    },

  methods:{
    mounted()
{
    axios.get('http://localhost:3000/api/users').then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
},
generateSlip:function(search)
{
axios.get('http://localhost:3000/api/users?category=' + search).then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
},
gotoprofile(){
  location.replace(`/profile?id=${this.id}`);
}

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
}
.row {
  position: absolute;
  top: 50px;
  height: 80%;
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
  margin-top: 20px;
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
