<template>
  <section class="container">
    <div class="main">
      <form>
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
                  v-model="user_det.ename"
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
                  v-model="user_det.about"
                />
              </div>
              <div class="form-group">
                <label for="Category"
                  >Category(If investor choose category you are interested to
                  invest,others choose category in which your product/service
                  falls)</label
                >
                <select class="form-control" id="Category" v-model="user_det.category">
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
                  v-model="user_det.email"
                />
              </div>
              <div class="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Eg:Pune"
                  v-model="user_det.location"
                />
              </div>
              <div class="form-group">
                <label for="Address">Address</label>
                <textarea class="form-control" id="Address" v-model="user_det.address" />
              </div>
              <div class="form-group">
                <label for="Phone">Phone</label>
                <input class="form-control" id="Phone" v-model="user_det.phone" />
              </div>
            </div>
            <div class="subcard">
              <h5>Login Details</h5>
              <div class="form-group">
                <label for="Username">Username</label>
                <input class="form-control" id="Username" />
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" />
              </div>
              <div class="form-group">
                <label for="Cpass">Confirm Password</label>
                <input type="password" class="form-control" id="Cpass" />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="button--grey" @click="addToAPI()"> Confirm Registeration </button>
      </form>

      
    </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      user_det:{
        ename:'',
        about:'',
        category:'',
        email:'',
        location:'',
        address:'',
        phone:0,
      },
    }
  },
  methods:{
    addToAPI(){
      let newUser= {
        ename: this.ename,
        about: this.about,
        category: this.category,
        email: this.email,
        location: this.location,
        address: this.address,
        phone: this.phone

      }
      console.log(this.user_det);
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