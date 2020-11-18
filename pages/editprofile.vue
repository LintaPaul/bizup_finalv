<template>
  <section class="container">
   <div><button class="optbtns" @click="redfeeds">Go to feeds</button></div>
    <div class="main">
       
      <form>
      <div class="row">
          <h3><b>EDIT PROFILE</b></h3><br><br>
          <div class="col-6">
            <div class="card">
                <div class="form-group">
                <label for="enterprisename"><b>Enterprise Name</b></label>
                <input required
                  type="text"
                  class="form-control"
                  id="enterprisename"
                 v-model="form.ename"
                />
                </div><!--form-group-->
              <div class="form-group">
                <label for="About Us"><b> About</b></label>
                <textarea
                  class="form-control"
                  id="About Us"
                  v-model="form.about"/>
              </div><!--form-group-->
              <div class="form-group">
                <label for="Email"><b>Email</b></label>
                <input required type="text" class="form-control" id="Email" v-model="form.email"/>
                </div><!--form-group-->
                <div class="form-group">
                <label for="phone"><b>Phone No</b></label>
                <input required type="text" class="form-control" id="phone" v-model="form.phone"/>
                </div><!--form-group-->

                <div class="form-group">
                <label for="location"><b>Location</b></label>
                <input required type="text" class="form-control" id="location" v-model="form.location"/>
                </div><!--form-group-->

                <div class="form-group">
                <label for="address"><b>Address</b></label>
                <textarea class="form-control" id="address" v-model="form.address"/>
                </div><!--form-group-->

                <div class="form-group">
                <label for="Category"><b>Choose your category(If you are an investor select the category you want to invest in)</b></label>
                <select class="form-control" id="Category" v-model="form.category">
                  <option selected>Agriculture</option>
                  <option>Handloom</option>
                  <option>Pottery</option>
                  <option>Tech services</option>
                  <option>Infrastructure providers</option>
                  <option>Marketing</option>
                </select>
              </div><!--form-group-->
              <div class="form-group">
               <b> Whom do you want to connect with through this platform?(pick 1
                or more)</b>
                <div class="form-check">
                  <label class="form-check-label" for="ptype1">Investors</label>
                  <input class="form-check-input" type="checkbox" id="ptype1" value="Investor" v-model="form.preference">
                </div><!--form-check-->
                <div class="form-check">
                  <label class="form-check-label" for="ptype2">Startup/Cottage Industry</label>
                  <input class="form-check-input" type="checkbox" id="ptype2" value="Startup" v-model="form.preference">
                </div><!--form-check-->
                <div class="form-check">
                  <label class="form-check-label" for="ptype3">Technical Assistance</label>
                  <input class="form-check-input" type="checkbox" id="ptype3" value="Tech" v-model="form.preference">
                </div><!--form-check-->
                <div class="form-check">
                  <label class="form-check-label" for="ptype4">Marketing Agency</label>
                  <input class="form-check-input" type="checkbox" id="ptype4" value="Marketing" v-model="form.preference">
                </div><!--form-check-->
                <div class="form-check">
                  <label class="form-check-label" for="ptype5">Infrastructure Providers</label>
                  <input class="form-check-input" type="checkbox" id="ptype5" value="Infra" v-model="form.preference">
                </div><!--form-check-->

              </div><!--form-group-->
                <input type="submit" value="Update Profile" class="button--grey" @click="addtoprofile()"/>&emsp;

                </div><!--card-->
          </div><!--col-6-->
          </div><!--row-->
          
        </form>
        </div>
        </section>
</template>

<script>
import axios from "axios"
import {Router} from "vue-router"
export default {
  data(){
    return{
        id:this.$route.query.id,
        cat:[],
         form:{
           ename:'',
           about:'',
           category:'',
           preference:[],
           email:'',
           location:'',
           address:'',
           phone:0,
          }
    }
  },
  mounted:function()
{
    this.getloggeduser(this.id)
    
},
methods:
{
   
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
    addtoprofile(){
      let newform={

           id:this.id,
           ename:this.form.ename,
           about:this.form.about,
           category:this.form.category,
           preference:this.form.preference,
           email:this.form.email,
           location:this.form.location,
           address:this.form.address,
           phone:this.form.phone
      }
      axios.post('http://localhost:3000/api/users/editprofile',newform).then((response)=>{
        console.log(response);
       alert(response.data.message);
        }).catch(error=>{
        console.log(error);
        alert(error);
      })
    },
  redfeeds(){
    location.replace(`/feednew?id=${this.id}`);
  }

}
}
</script>

<style scoped>
.container {
  padding: 10px;
  
}
.main {
  padding: 10px;
  height: 100vh;
  width:-200%;
  
}
.card {
  border: #93D 50px solid;
  margin-bottom: 4px;
  margin-top:50px;
  padding: 50px;
  text-align:justify;
}
.col-6 {
  padding: 0px;
  text-align: justify;
}
.form-group input,
textarea,
select {
  width: 110%;
}
.optbtns{
  margin:4px;
  padding:4px;
  background-color: #93D;
  color:white;
  border:none;
  border-radius:10px;
  position:absolute;
  left:10px;
  top:50px;
}


</style>