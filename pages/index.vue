<template >
      <v-app id="inspire">
      <v-carousel cycle interval="4000"
       :continuous="true"
       :show-arrows="false" height="100%" >
    <v-carousel-item
      v-for="(item,i) in items" :key="i"
      :src="item.src"
      transition="fade-transition"
      reverse-transition="fade-transition"
      duration="4ms"
    >
    <br><br><br><br>
    <p>
      <h1 class="title">BizUp</h1>
      <br><br><br><br>
      <h4 class="subtitle">A one stop solution to all your business needs</h4>
       <div class="links">
        <u class="txt">New user?</u>

        <NLink to="/user/register" class="button--green" style="color:white;">Register</NLink>&emsp;
        <u class="txt">Already a user?</u>
        <NLink to="/user/login" class="button--grey" style="color:white;">Login</NLink>
        </div>
      </p>
    </v-carousel-item>
  </v-carousel>
  
      </v-app>
     
    
</template>
<script>
export default {
   data () {
      return {
        items: [
          {
            src: require('~/assets/images/agri.jpg'),
          },
          {
            src: require('~/assets/images/handloom.jpg'),
          },
          {
            src: require('~/assets/images/pottery.jpg'),
          },
          {
            src: require('~/assets/images/bisup.jpg'),
          },
        ],
      }
    },
};
</script>

<style scoped>
#inspire
{
  height:100vh;
  width:100%;
}


.title {
  font-family: "Quicksand", "Source Sans Pro","Helvetica Neue", Arial, sans-serif;
  
  text-align:center;
  font-weight: 400;
  color: #eaedf0;
  letter-spacing: 1px;
  font-size:200px!important;
  
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
* {
  font-family: Roboto;
}
.subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #FFFFFF;
}
.txt {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: justify;
  text-decoration-line: underline;

  color: #FFFFFF;
}

</style>
