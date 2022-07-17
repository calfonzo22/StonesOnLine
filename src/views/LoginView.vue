<template>
    
 <img class="logo" src="../assets/logo.jpg">
  <h1>Login</h1>

<div class="login">
<input type="text" v-model="email" placeholder="Enter Email"/>
<input type="text" v-model="password" placeholder="Enter Password"/>
</div>
<button v-on:click="login">Login</button>
<p>
  <router-link to="/signup">SignUp</router-link>
  </p>

</template>

<script>
import axios from 'axios'
export default {
    name:'LoginView',
    mounted()
    {
      let user=localStorage.getItem('user-info');
      if(user)
       this.$router.push({ name:'HomeView'})
   },

    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
        let result = await axios.get(
            `http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'HomeView'})
            }
    
     console.warn(result)
     }
    }
    };

</script>
