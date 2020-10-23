<template>
  <section>
    <div class="container">
      <Headers />
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>Let's Venture</h2>
            <h5>Make your business dreams come true with us...</h5>
            <div class="fakeimg">
              <img src="a/11.jpeg" alt="Simply Easy Learning" />
            </div>
            <p>
              <a href=" ">Let know your interest</a>
            </p>
          </div>
          <div class="card">
            <h2>Stand up to Startup</h2>
            <h5>Worried about funds to start a new business?</h5>
            <div class="fakeimg">Image</div>
            <p>
              <a href=" ">Let know your interest</a>
            </p>
          </div>

          <div class="card">
            <h2>InfraWorld</h2>
            <h5>Trusted infra structure providers</h5>
            <div class="fakeimg" style="height: 200px">Image</div>
            <p><a href=" ">Let know your interest</a></p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>Nick</h2>
            <div class="fakeimg" style="height: 200px">Image</div>
            <p>
              I am an entreprenuer who would like to find investors with similar
              interests.
            </p>
          </div>
          <div class="card">
            <h3>Chat history</h3>
            <div class="fakeimg">Image</div>
            <br />
            <div class="fakeimg">Image</div>
            <br />
            <div class="fakeimg">Image</div>
          </div>
          <br /><br />
          <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Headers from "../components/Header.vue";
export default {
  components: {
    Headers,
  },
};
</script>

<style scoped >
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white !important;
  background-size: 100% !important;
  overflow: visible;
  margin-top: 0px;
}
.row {
  position: absolute;
  top: 50px;
  height: 80%;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
/* Header/Blog Title */
/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  position: relative;
  float: left;
  width: 75%;
  text-align: left;
}
/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding: 15px;
  border-style: double;
  border-color: #93D;
}
/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  height: 200px;
  padding: 20px;
}
/* Add a card effect for articles */
.card {
  position: relative;
  height: 30%;
  background-color: rgb(250, 244, 244);
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
}
.card a {
  color: #93D;
  font-size: 1 rem;
  font-weight: bold;
  text-decoration: none;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Footer */
.a {
  text-decoration: none;
}
a:hover {
  color: #ff8000;
}
.sidebar {
  position: fixed;
  transform: translateX(-30rem);
  width: 30rem;
  background-color: wheat;
  height: 100%;
}
.sidebar.open {
  transform: translateX(0);
}
.sidebar-close-button {
  border-radius: 50%;
  border: 0.1rem black solid;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  font-size: 2rem;
  padding-top: 0;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 1.5rem;
}
.brand a {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
}
/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>
