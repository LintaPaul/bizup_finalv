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
              placeholder="Your Email *"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Your Password *"
              value=""
            />
          </div>
          <div class="form-group">
            <NLink to="/feeds"
              ><input type="submit" class="btnSubmit" value="Login"
            /></NLink>
          </div>
          <div class="form-group">
            <a href="/" class="ForgetPwd">Back home</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
  min-width: 50%;
  background: url("../assets/images/bisup.jpg");
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

