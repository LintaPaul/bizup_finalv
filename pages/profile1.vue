<template>
  <section>
  
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="fb-profile-block">
            <div class="fb-profile-block-thumb cover-container"></div>
            <div class="profile-img">
              <a href="#">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                  title=""
                />
              </a>
            </div>

            <div class="profile-name">
              <h2>NAME</h2>
              <h5>EMAIL ID</h5>
            </div>

            <div class="fb-profile-block-menu">
              <div class="block-menu">
                <ul>
                  <li><a href="#">Timeline</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">Photos</a></li>
                  <li><a href="#">Back to Feeds</a></li>
                </ul>
              </div>
              <div class="block-menu">
                <ul>
                  <li><a href="#">Timeline</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">Photos</a></li>
                  <li><a href="#">Back to Feeds</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <section>
    <div class="card">
      <h4>ABOUT US</h4>
      <p>...........</p>
    </div>
  </section>
  <section>
    <div class="card">
      
      <h4>CONTACT DETAILS</h4>
      <p>.................</p>
    </div>
  </section>
  <section>
    <div class="card">
      <h4>LOCATION</h4>
      <p>.................</p>
    </div>
  </section>
  <div>
   <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateprofile()" value="Submit" />
      </label>
      </div>
<p>{{User.ename}}</p>
<p>{{User.about}}</p>
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
            id:this.$route.query.id
            
        }
    },
methods:{
  generateprofile:function(id)
  {
    axios.get('http://localhost:3000/api/users?id=' +id).then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
  }
  }
};
</script>

<style>
.fb-profile-block {
  margin: auto;
  position: relative;
  width: 100%;
}
.cover-container {
  background: #93D;
  background: -webkit-radial-gradient(bottom, #93D);
  background: radial-gradient(at bottom, #93D);
}
.fb-profile-block-thumb {
  display: block;
  height: 315px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}
.fb-profile-block-menu {
  border: 1px solid #d3d6db;
  border-radius: 0 0 3px 3px;
}
.profile-img a {
  bottom: 15px;
  box-shadow: none;
  display: block;
  left: 15px;
  padding: 1px;
  position: absolute;
  height: 160px;
  width: 160px;
  background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;
  z-index: 9;
}
.profile-img img {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.07);
  height: 158px;
  padding: 5px;
  width: 158px;
}

.profile-name {
  bottom: 60px;
  left: 200px;
  position: absolute;
}
.profile-name h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  max-width: 275px;
  position: relative;
  text-transform: uppercase;
}

.fb-profile-block-menu {
  height: 44px;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.block-menu {
  clear: right;
  padding-left: 205px;
}
.block-menu ul {
  margin: 0;
  padding: 0;
}
.block-menu ul li {
  display: inline-block;
}
.block-menu ul li a {
  border-right: 1px solid #e9eaed;
  float: left;
  font-size: 14px;
  font-weight: bold;
  height: 42px;
  line-height: 3;
  padding: 0 17px;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  color: #4b4f56;
  text-transform: capitalize;
}
.block-menu ul li:first-child a {
  border-left: 1px solid #e9eaed;
}
.card{
  position:centre;
  top: -140px;
  bottom:0;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  max-width:100;
  margin:auto;
  text-align:centre;
  background-color:white;
}
.card{
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  max-width:100;
  margin:space;
  text-align:centre;
  background-color:white;
}
.card{
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  max-width:100;
  margin:space;
  text-align:centre;
  background-color:white;
}



</style>
