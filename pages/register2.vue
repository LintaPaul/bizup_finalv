<template>
  <section class="container">
    <div class="main">
      <form method="POST" action="">
        <div class="row">
          <h3>Create profile</h3>
          <p>Fill in the following details to create a profile for your enterprise</p>
          <div class="col-6">
            <div class="subcard">
              <h4>Firm Details</h4>
              <div class="form-group">
                <div class="form-check">
                  Which one of the following describes  you the best?<br>
                <label class="form-check-label">Investor</label>
                <input class="form-check-input" type="radio" id="utype1"  v-model="form.usertype" value="Investor"/>
                </div><!--form-check-->
                <div class="form-check">
                <label class="form-check-label">Startup/Cottage Industry</label>
                <input class="form-check-input" type="radio" id="utype2"  v-model="form.usertype" value="Startup"/>
                </div><!--form-check-->
                <div class="form-check">
                <label class="form-check-label">Technical solution providers</label>
                <input class="form-check-input" type="radio" id="utype3"  v-model="form.usertype" value="Tech"/>
                </div><!--form-check-->
                <div class="form-check">
                <label class="form-check-label">Marketing Agency</label>
                <input class="form-check-input" type="radio" id="utype4"  v-model="form.usertype" value="Marketing"/>
                </div><!--form-check-->
                <div class="form-check">
                <label for="form-check-label">Infrastructure providers</label>
                <input class="form-check-input" type="radio" id="utype5"  v-model="form.usertype" value="Infra"/>
                </div><!--form-check-->
              </div><!--form-group-->
              <div class="form-group">
                <label for="enterprisename">Enterprise Name</label>
                <input required
                  type="text"
                  class="form-control"
                  id="enterprisename"
                  placeholder="Eg:Lets Venture"
                 v-model="form.ename"
                />
              </div><!--form-group-->
              <div class="form-group">
                <label for="description"
                  >Briefly explain about your service/product</label
                >
                <textarea
                  class="form-control"
                  id="description"
                  placeholder="Eg:We are investors..."
                  v-model="form.about"
                />
              </div><!--form-group-->
              <div class="form-group">
                <label for="Category">Choose your category(If you are an investor select the category you want to invest in)</label>
                <select class="form-control" id="Category" v-model="form.category">
                  <option selected>Agriculture</option>
                  <option>Handloom</option>
                  <option>Pottery</option>
                  <option>Web/App services</option>
                  <option>Marketing</option>
                </select>
              </div><!--form-group-->
              <div class="form-group">
                Whom do you want to connect with through this platform?(pick 1
                or more)
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

            </div><!--subcard-->
          </div><!--col-6-->
          <div class="col-6">
            <div class="subcard">
               <h5>Contact Details</h5>
              <div class="form-group">
                <label for="email"
                  >Email(email of organisation or official email of
                  representative)</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Eg:example@gmail.com"
                  v-model="form.email"
                />
              </div><!--form-group-->
              <div class="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Eg:Pune"
                  v-model="form.location"
                />
              </div><!--form-group-->
              <div class="form-group">
                <label for="Address">Address</label>
                <textarea class="form-control" id="Address" v-model="form.address" />
              </div><!--form-group-->
              <div class="form-group">
                <label for="Phone">Phone</label>
                <input class="form-control" id="Phone" v-model="form.phone" />
               </div><!--form-group-->
            </div><!--subcard-->
            <div class="subcard">
              <h5>Login Details</h5>
              <div class="form-group">
                <label for="Username">Username</label>
                <input class="form-control" id="Username" v-model="form.username" />
              </div><!--form-group-->
              <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" v-model="form.password"/>
              </div><!--form-group-->
              <div class="form-group">
                <label for="Cpass">Confirm Password</label>
                <input type="password" class="form-control" id="Cpass" />
              </div><!--form-group-->
            </div><!--subcard-->
          </div><!--col-6-->
        </div><!--row-->
        <input type="submit" value="Confirm Registeration" class="button--grey" @click="addtoAPI"/>
      </form>

      
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data(){
    return{
         form:{
           usertype:'',
           ename:'',
           about:'',
           category:'',
           preference:[],
           email:'',
           location:'',
           address:'',
           phone:0,
           username:'',
           password:''
          }
    }
  },
  methods: {
    addtoAPI(){
      let newform={
        usertype:this.form.usertype,
        ename:this.form.ename,
           about:this.form.about,
           category:this.form.category,
           preference:this.form.preference,
           email:this.form.email,
           location:this.form.location,
           address:this.form.address,
           phone:this.form.phone,
           username:this.form.username,
           password:this.form.password
      }
      console.log(newform);
      axios.post('http//localhost:3000/api/users/register').then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>
<style scoped>
.container {
  padding: 10px;
}
.main {
  padding: 5px;
  height: 100vh;
}
.subcard {
  border: #3499 4px solid;
  margin-bottom: 4px;
  padding: 12px;
  text-align:justify;
}
.col-6 {
  padding: 10px;
  text-align: justify;
}
.form-group input,
textarea,
select {
  width: 50%;
}
</style>