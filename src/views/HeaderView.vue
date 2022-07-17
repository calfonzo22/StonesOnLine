<template>
    <h2></h2>
<div class="nav-links">
  
  <a v-on:click="logout" href="/">Logout</a>
  
</div>
</template>

<script>
export default {
    name:'HeaderView',
    methods: {
        logout ()
        {
            localStorage.clear();
            this.$router.push({name:'Signin'})
        }
    }
}
</script>
