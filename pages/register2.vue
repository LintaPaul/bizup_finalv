<template>
  <section class="container">
    <div class="main">
      <form method="POST" action="" @submit.prevent="submitForm()">
        <h3>Create Profile</h3>
        <h4>Fill in the following details to create a profile for your firm</h4>
        <div class="row">
          <div class="col-6">
            <div class="subcard">
              <h5>Firm Details</h5>
              <div class="form-group">
                <label for="enterprisename">Enterprise Name</label>
                <input required
                  type="text"
                  class="form-control"
                  id="enterprisename"
                  placeholder="Eg:Lets Venture"
                 v-model="ename"
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
                  v-model="about"
                />
              </div>
              <div class="form-group">
                <label for="Category"
                  >Category(If investor choose category you are interested to
                  invest,others choose category in which your product/service
                  falls)</label
                >
                <select class="form-control" id="Category">
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
                  <label class="form-check-label" for="Inv"> Investors </label>
                  <input class="form-check-input" type="checkbox" id="Inv" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="Start">
                    Startups/Cottage Industries
                  </label>
                  <input class="form-check-input" type="checkbox" id="Start" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="Tech">
                    Technical Solution providers
                  </label>
                  <input class="form-check-input" type="checkbox" id="Tech" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="Infra">
                    Infrastructure providers
                  </label>
                  <input class="form-check-input" type="checkbox" id="Infra" />
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="Mark">
                    Marketing agencies
                  </label>
                  <input class="form-check-input" type="checkbox" id="Mark" />
                </div>
              </div>
            </div>
          </div>
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
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Eg:Pune"
                  v-model="location"
                />
              </div>
              <div class="form-group">
                <label for="Address">Address</label>
                <textarea class="form-control" id="Address" name="address" />
              </div>
              <div class="form-group">
                <label for="Phone">Phone</label>
                <input class="form-control" id="Phone" v-model="phone" />
              </div>
            </div>
            <div class="subcard">
              <h5>Login Details</h5>
              <div class="form-group">
                <label for="Username">Username</label>
                <input class="form-control" id="Username" v-model="username" />
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" v-model="password"/>
              </div>
              <div class="form-group">
                <label for="Cpass">Confirm Password</label>
                <input type="password" class="form-control" id="Cpass" />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Confirm registeration" class="button--grey"> 
      </form>

      
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  middleware: 'auth',
  auth: 'guest',
  data(){
    return{
      errors:null,
      ename:null,
      about:null,
      email:null,
      address:null,
      location:null,
      phone:null,
      username:null,
      password:null,

      status:true,
    }
  },
  methods:{
    submitForm(){
      this.$axios.$post( '/api/users/register', {
          ename:this.ename,
      about:this.about,
      
      email:this.email,
      address:this.address,
      location:this.location,
      phone:this.phone,
      username:this.username,
      password:this.password,

        })
        .then((response) => {
          console.log(response)
          if(response.data._id){
            this.$router.push({ name:'user-login', params:{ registered:'yes' } })
            // log in if successfully registered
            this.$auth.loginWith('local', {
                data: {
                  password: this.password
                }
              })
              .catch( (error) => {
                console.log(error)
              })
          }
        })
        .catch( (error) => {
          console.log(error)
          if(error.response.data.errors){
            this.errors = error.response.data.errors
          }
        });
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