<template>
<HeaderView/>
 
<!---HompePage Design-->

<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Stones Online Shopping</title>
</head>
<body>
    <header>
        <h1>Awesome Tumbled and Chips!</h1>
    </header>
    
    <main>
        <div class="hero">
            <img src="../assets/Stones.jpg" alt="Stones">
            <div class="herotext">
                <h2>Awesome Stones!</h2>
                <p>Crystals, Chips, Chunks, Pendants and more....</p>
                <p>The most beautiful stuff you have never seen!</p>
                <p>Click below to start shopping!</p>
            </div>
        </div>
        
        <h2>Welcome to our Stones online Shopping!</h2>
    
        <pre>Tumbled stones are small, rounded, brightly polished pieces of rocks and minerals.
          They are made by placing rough rocks in a machine known as a rock tumbler, which t
          umbles them until their edges and surfaces are smooth and polished.</pre>
    
    </main>
    
    <footer>
       
        &copy; Copyright Conestoga College, 2022 - Carlos Alfonzo
    </footer>
</body>

</template>

<script>
import HeaderView from '../views/HeaderView.vue'
export default {
name:'HomeView',
components: {
  HeaderView
},
mounted()
{
  let user=localStorage.getItem('user-info');
  if(!user)
   this.$router.push({ name:'SignUp'})
}
    }


</script>

<style>

.nav{
background-color:black;
  overflow: hidden;
}
.nav a{
  
  float: left;
  color:white;
  padding: 1px 12px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover{
  background: white;
  color:black;
}
.img{
  width:100px;
}
footer{
  color:green;
  size: 14px;
  font-weight: bold;
}
h2{
  size:14px;
  color:blueviolet;

}
pre {
  font:14px;
  font-weight: bold;
}
</style>