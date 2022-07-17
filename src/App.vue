<template>
  <div class="nav">
    <router-link :class="{active: $route.name === 'home'}" to="/">Home</router-link> 
    <router-link :class="{active: $route.name === 'productview'}" to="/products/productview">Products</router-link> 
    <router-link :class="{active: $route.name === 'cart'}" to="/cart">Cart</router-link> 
    <router-link :class="{active: $route.name === 'SignUp'}" to="/signup">Login</router-link> 
  
    
    
  </div>
  <router-view/>
</template>

<script>
  
    export default {
      mounted() {
        this.$store.commit('updateCardFromLocalStorage')

      }
    }
    </script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
body{
  background-color: rgb(245, 245, 245);
}
.nav {
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: white;
  line-height: 30px;

  a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &.active {
    color:green;
    }
  }
}
.text-center {
  text-align: center;
}
.login input .signup input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-block: auto;
  border: 1px solid skyblue;
}
.register button{
width: 320px;
height: 40px;
border: 1px solid skyblue;
color: #fff;
cursor: pointer;
}

</style>
