<template>
  <section class="container login-container">
    <div class="row">
      <div class="col-md-12 col-lg-12 login-form-1">
        <h3>Login Form</h3>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="login.username"
              placeholder="Your Username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Your Password *"
              v-model="login.password"
            />
          </div>
          <button class="btnSubmit" type="submit" @click="loginUser">
              Sign in
            </button>{{login.username}}
          <div class="form-group">
            <a href="/" class="ForgetPwd">Back home</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios"
import router from "vue-router"
export default {
  
  data() {
    return {
      login: {
        username: "",
        password: "",
        
      },
      id:''
    }
  },
  methods: {
    loginUser() {
      let newlog={
        username:this.login.username,
        password:this.login.password
      }
      console.log(newlog);
      axios.post('http://localhost:3000/api/users/login',newlog).then((response)=>{
        console.log(response.data.user);
        this.login.username=response.data.user.username;
        this.id=response.data.user._id;
        
        //localStorage.setItem("current_user",response.data.user._id);
        location.replace(`/feednew?id=${response.data.user._id}`);
        
       }).catch((error)=>{
        console.log(error);
      })

    }
  }
}
</script>
<style scoped>
.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
  min-width: 50%;
  background: white;
  background-repeat: no-repeat;
  background-size: 100%;
}
.login-form-1 {
  background: white !important;
  min-width: 75%;
  height: 50vh;
  padding: 5%;
  box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3 {
  text-align: center;
  color: #333 !important;
}
.btnSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  border: none;
  cursor: pointer;
}
.login-form-1 .btnSubmit {
  font-weight: 600;
  color: #fff;
  background-color: #0062cc;
}
</style>

