<template>
  <section class="container">
  <div class="header">
      <div class="titles"><NLink to="/" class="link">Bizup</NLink></div>

      
      <div class="titles">
        <!--<NLink to="/" class="linkr">Logout</NLink>-->
        <button @click="logout()" class="linkr">Logout</button>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios"
export default {
  name: "Headers",
  data()
  {
    return{
    tk:''
    }
  },
  methods:
  {
    logout()
    {
       axios.get('http://localhost:3000/api/users/user').then((response)=>{
         this.tk=response.data.token;
        localStorage.removeItem(this.tk);
       location.replace('/');
       
       
       }).catch((error)=>{
        alert(error);
      })

       
    }
  }
  
};
</script>
<style scoped>

.header {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(104, 7, 168, 0.61);
  color: cornsilk;
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  align-items: right;
  padding: 0.5rem;
  overflow: visible;
}
.link {
  color: white;
  text-decoration: none;
  position: absolute;
  left: 20px;
  top: 0;
}
.linkr {
  justify-content: space-in-between;
  padding-left: 14px;
  padding-right: 2px;
  text-align: right;
  color: white;
  font-weight: bold;
  text-decoration: none;
  background-color: inherit;
  background-blend-mode: color;
  border:none!important;
}
.titles {
  display: inline-block;
  flex-direction: flex-start;
  align-items: flex-end;
}
.link,
.linkr:hover {
  text-decoration: underline;
}
</style>