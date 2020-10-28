<template>
   <div class="table table-striped table-borders">
     
       <thead>
       <tr>
           <th>Name</th>
           <th>category</th>
           <th>preference</th>
           <th>phone</th>
           <th>address</th>
       </tr>
       </thead>
    <body>
          <div>
              <select v-model="search">
                  <option :value="n" v-for="n in ['please select','Handloom','Agriculture','Pottery','Web/App services']">{{n}}</option>
              </select>
              </div>
              <div class="alignBtn">
                  <label><span>&nbsp;</span><input type="submit" v-on:click.prevent="generateSlip()" value="Submit" />
</label>
</div>
           <tr v-for="user_alias in User">
            <div v-show="user_alias.category==search">
           <td>{{user_alias.ename}}</td>
           <td>{{user_alias.category}}</td>
            <td>{{user_alias.preference}}</td>
             <td>{{user_alias.phone}}</td>
              <td>{{user_alias.address}}</td>
           </div>
           </tr>
       </body>
        </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'use4',
    data(){
        return{
            User: [],
            search:''
            
        }
    },

  methods:{
    mounted()
{
    axios.get('http://localhost:3000/api/users').then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
},
generateSlip:function(search)
{
axios.get('http://localhost:3000/api/users?category=' + search).then((response)=>{
    console.log(response.data);
    this.User = response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
}

}
}
</script>
<style>

</style>