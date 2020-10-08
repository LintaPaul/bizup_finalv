<template>
  <section class="ct">
    <div class="row h-100">
      <div
        class="col-lg-12 col-md-6 mx-auto my-auto"
        style="text-align: center"
      >
        <form class="group ctsub">
          <h3 style="color: #33499A">Registeration</h3>
          <div class="form-group">
            <label for="usertype"
              >Which one of following describes you the best?</label
            >
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="usertype"
                id="Inv"
                value="Investor"
                checked
              />
              <label class="form-check-label" for="Inv"> Investor </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="usertype"
                id="StC"
                value="Startup"
              />
              <label class="form-check-label" for="Startup">
                Startup/Cottage Industry
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="usertype"
                id="Tech"
                value="Techassist"
              />
              <label class="form-check-label" for="Tech">
                Technical Assisstance
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="usertype"
                id="Mark"
                value="Markagency"
              />
              <label class="form-check-label" for="Mark">
                Marketing agency
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="usertype"
                id="Infra"
                value="Infrastructue"
              /><label class="form-check-label" for="Infra">
                Infrastructure Providers</label
              >
            </div>
            <nuxt-link to="/" class="btn save">Close</nuxt-link>&emsp;
            <button type="submit" class="btn save">
              <NLink to="/register2" style="color: white; text_decoration: none"
                >Save & Continue</NLink
              >
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  display: true,
};
</script>
<style scoped>
.ct {
  background: url("../assets/images/bisup.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  min-width: 100%;
  height: 100vh;
  padding: 20px;
}
.ctsub {
  background: white;
  border: 2px #33499A solid;
  align-self: center;
  max-width: 50%;
  padding: 10px;
  font-size: 22px;
  border-radius: 20px;
}
.row {
  display: flex;
  align-items: center;
}
.group {
  line-height: 2.5rem;
  justify-content: space-in-between;
}
.form-check {
  text-align: left;
}
.form-check-input {
  align-self: left;
  size: 24px;
}
.form-check-input:checked {
  color: #33499A;
}
.save {
  background: #33499A;
  color: white;
  font-weight: bold;
  border-radius: 50px;
  text-align: center;
  justify-content: space-around;
}
.save:hover {
  background: white;
  color: #33499A;
  border: 2px #33499A solid;
}
</style>


