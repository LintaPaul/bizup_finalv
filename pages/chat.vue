<template>
  <div class="container">
    <NLink to="/feeds">Back home</NLink>
    <div v-for="user_alias in User">
                      <div v-show="user_alias._id===id">
                        <div v-for="uf in user_alias.friends">
                                             <h5>{{uf}}</h5>
                                             </div>
                      </div>
    </div>
    <div><br><br>
                   <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateprofile()" value="Submit" />
                  </label>
          </div>
  </div>
</template>

<script>
import Headers from "../components/Header.vue";
import axios from 'axios';
import {Router} from "vue-router";
export default {
  components: {
    Headers,
  },
   name: 'use5',
    data(){
        return{
            User: [],
            id:this.$route.query.id
            
        }
    },
methods:{
 /* mounted()
{
    axios.get('http://localhost:3000/api/users').then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
},*/
  generateprofile:function(id)
  {
    axios.get('http://localhost:3000/api/users?id='+ id).then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
  }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: none;
  background-color: white;
}
</style>