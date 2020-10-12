<template>
  <section class="container">
    <div class="main">
      <form method="POST" action="">
        <h3>Create Profile</h3>
        <h4>Fill in the following details to create a profile for your firm</h4>
        <div class="row">
          <div class="col-12">
          <div class="subcard">
              <h5>Firm Details</h5>
            <div class="form-group">
               <label for="usertype"
                >Which one of following describes you the best?</label
                 >
               <div class="form-check">
                <input
                class="form-check-input"
                type="radio"
                v-model="form.usertype"
                id="Inv1"
                value="Investor"
                checked
                />
                <label class="form-check-label" for="Inv1"> Investor </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="form.usertype"
                  id="StC"
                  value="Startup"
                />
                <label class="form-check-label" for="StC">
                Startup/Cottage Industry
                </label>
             </div>
             <div class="form-check">
               <input
                 class="form-check-input"
                 type="radio"
                 v-model="form.usertype"
                 id="Tech1"
                 value="Techassist"
               />
               <label class="form-check-label" for="Tech1">
                 Technical Assisstance
                </label>
             </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                v-model="form.usertype"
                id="Mark1"
                value="Marketing"
              />
              <label class="form-check-label" for="Mark1">
                Marketing agency
              </label>
            </div>
            <div class="form-check">
               <input
                class="form-check-input"
                type="radio"
                v-model="form.usertype"
                id="Infra1"
                value="Infrastructue"
               />
               <label class="form-check-label" for="Infra1">
                Infrastructure Providers</label>
             </div>
           </div>
              <div class="form-group">
                <label for="enterprisename">Enterprise Name</label>
                <input required
                  type="text"
                  class="form-control"
                  id="enterprisename"
                  placeholder="Eg:Lets Venture"
                 v-model="form.ename"
                />
              </div>
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
              </div>
              <div class="form-group">
                <label for="Category"
                  >Category(If investor choose category you are interested to
                  invest,others choose category in which your product/service
                  falls)</label
                >
                <select class="form-control" id="Category" v-model="form.category">
                  <option selected>Agriculture</option>
                  <option>Handloom</option>
                  <option>Pottery</option>
                  <option>Web/App services</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div class="form-group">
                Whom do you want to connect with through this platform?(pick 1
                or more)
                <div class="form-check">
                  
                  <input class="form-check-input" type="checkbox" id="Inv" value="Investor" v-model="form.preference"/>
                  <label class="form-check-label" for="Inv"> Investors </label>
                </div>
                <div class="form-check">
                  
                  <input class="form-check-input" type="checkbox" id="Start" value="Startup" v-model="form.preference" />
                  <label class="form-check-label" for="Start">
                    Startups/Cottage Industries
                  </label>
                </div>
                <div class="form-check">
                  
                  <input class="form-check-input" type="checkbox" id="Tech" value="Technology" v-model="form.preference" />
                  <label class="form-check-label" for="Tech">
                    Technical Solution providers
                  </label>
                </div>
                <div class="form-check">
                  
                  <input class="form-check-input" type="checkbox" id="Infra" value="Infrastructure providers" v-model="form.preference" />
                  <label class="form-check-label" for="Infra">
                    Infrastructure providers
                  </label>
                </div>
                <div class="form-check">
                  
                  <input class="form-check-input" type="checkbox" id="Mark" value="Marketing" v-model="form.preference" />
                  <label class="form-check-label" for="Mark">
                    Marketing agencies
                  </label>
                </div>
              </div>
              <div class="col-12">
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
              </div>
              <div class="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Eg:Pune"
                  v-model="form.location"
                />
              </div>
              <div class="form-group">
                <label for="Address">Address</label>
                <textarea class="form-control" id="Address" v-model="form.address" />
              </div>
              <div class="form-group">
                <label for="Phone">Phone</label>
                <input class="form-control" id="Phone" v-model="form.phone" />
               </div>
            </div>
               <div class="subcard">
              <h5>Login Details</h5>
              <div class="form-group">
                <label for="Username">Username</label>
                <input class="form-control" id="Username" v-model="form.username" />
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" v-model="form.password"/>
              </div>
              <div class="form-group">
                <label for="Cpass">Confirm Password</label>
                <input type="password" class="form-control" id="Cpass" />
              </div></div></div>
              <button class="button--grey"> Cancel</button>&emsp;
        <input type="submit" value="Confirm registeration" style="align:right;" @click="addtoAPI" class="button--grey"/> 
      </div></div></div>
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
      axios.post('http://localhost:3000/api/users/register').then((response)=>{
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