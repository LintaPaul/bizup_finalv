<template>
  
  <section>
    <Headers />
    <div class="container">
      
      <div class="row">
        <div class="col-md-12">
          <div v-for="user_alias in User">
                      <div v-show="user_alias._id===id">
                           <div class="card">
                                   <div class="profile-img">
                                        <a href="#">
                                           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" title=""/>
                                        </a>
                                   </div><!--pimg-->
                           
                                    <div style="position:relative;">
                                        <h3 style="padding:50px;">ENTERPRISE NAME:
                                        {{user_alias.ename}} </h3>
                                    </div>
                                  </div><!--card-->

                                   <div class="card0">
                                      <h4><b>ABOUT US</b></h4>
                                      <h5>{{user_alias.about}} </h5>
                                   </div><!--card0-->
                                   <div class="card1">
                                         <h4><b>CONTACT DETAILS</b></h4><br>
                                         <h5><b>EMAIL_ID:</b></h5><h5>{{user_alias.email}}</h5><br>
                                         <h5><b>PHONE_NO:</b></h5><h5>{{user_alias.phone}}</h5><br>
                                         <h5><b>LOCATION:</b></h5><h5>{{user_alias.location}}</h5><br>
                                         <h5><b>ADDRESS:</b></h5><h5>{{user_alias.address}}</h5><br>
                                    </div><!--card1-->
                                    <div class="card2">
                                           <h5><b> YOUR PREFERENCES:</b></h5>
                                           <div v-for="up in user_alias.preference">
                                             <h5>{{up}}</h5>
                                             </div>
                                             
                                           
                                           <h5><b> YOUR CATEGORY:</b></h5><h5>{{user_alias.category}}</h5>
                                    </div><!--card2-->
                                    
                                    
                      </div><!--vshow-->
                    </div><!--vfor-->
                  </div><!--col-->
             </div><!--row-->
           <div><br><br>
                   <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateprofile()" value="Submit" />
                  </label>
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
   name: 'use5',
    data(){
        return{
            User: [],
            id:this.$route.query.id
            
        }
    },
methods:{
 /* mounted()
{
    axios.get('http://localhost:3000/api/users').then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
},*/
  generateprofile:function(id)
  {
    axios.get('http://localhost:3000/api/users?id='+ id).then((response)=>{
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

<style scoped>

.row{
  background-color: aliceblue;
  margin:0px;
  position:absolute;
  top:40px;
}
.profile-img a {
  bottom: 15px;
  box-shadow: none;
  display: block;
  top: 0px;
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


.card{
  position:relative;
  top: 10px;
  bottom:-180px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  margin-top:14px;
  margin-bottom:14px;
  padding-top:0px;
  width:900px;
  height:250px;
  text-align:center;
  text-position:bottom;
  left:0;
  right:0;
  color:white;
  background-color:#93D;
}
.card0{
  position:relative;
  top:-10px;
  bottom:-200px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  margin-top:14px;
  width:900px;
  padding:12px;
  text-align:justify;
  background-color:wheat;
}
.card1{
  position:relative;
  top:-5px;
  bottom:-150px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  margin-top:14px;
  text-align:justify;
  padding:12px;
  background-color:wheat;
}
.card2{
  position:relative;
  top:-7px;
  bottom:-200px;
  box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);
  margin-top:14px;
  padding:12px;
  width:900px;
  text-align:justify;
  background-color:wheat;
}



</style>
