<template>
  <div class="home">
    <h1>Our Products</h1>
  <ProductDescriptionDrawer
   :product="product"
   :active="active.product_drawer"
   v-on:close-product-drawer="closeProductDrawer()" />
  
  
  <div class="product-cards-container">

    <ProductSummaryCard 
     v-for="product in items"
     :key="product.id"
     :product="product"
     v-on:view-product="viewProduct($event)" />

   </div>
  </div>
  </template>

  <script>
  // @ is an alias to /src
  import items from '../../data/items.js'
  import ProductSummaryCard from './ProductSummaryCard.vue'
  import ProductDescriptionDrawer from './ProductDescriptionDrawer.vue'


  export default {
    name: 'ProductView',
      components: {
        ProductSummaryCard,
        ProductDescriptionDrawer
},
      data (){
        return {
          items: items,
          product: null,
          active: {
              product_drawer: false
          }
        }
      },
      methods: {
        viewProduct(product) {
          this.product=product
          this.active.product_drawer = true
          console.log(this.product)
        },
        closeProductDrawer(){
          this.active.product_drawer=false
        }
      }
  }
  
  </script>

  <style lang="scss">
  .product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
    