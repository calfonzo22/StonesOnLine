<template>
    <div class="card">
        <h3>{{ product.name}}</h3>

        <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
        <h5 class="description">{{ product.description}}</h5>
        <h5 Class="category">Category: {{ product.category}}</h5>
        <div class="view-product-button" @click="$emit('view-product', product)">View Product</div>
    </div>
</template>

<script>

export default {
    props: ['product'],  
    computed: {
        description() {
            return this.product.description.substring(0, 150)
        }
    }   
}
</script>

<style lang="scss">
.card {
    width: 80%;
    margin: 10%;
    padding: 10px;
    border-radius: 5px;
    background-color:azure;
    box-shadow: 0 0 5px gray;

    h3{
        font-weight: bold;
        font-size: x-large;
        color:black;
    }
    
    h5.price{
        color:brown;
        font-weight: bold;
    }

    h5{
        color: gray;
    }
    .description{
        font-size: .85rem;
    }
    .view-product-button{
        padding: 10px;
        background: rgb(79 160 187);
        border: none;
        color: white;
        font-size: 1.15rem;
        font-weight: bold;
        border-radius: 5px;
        cursor:pointer;
    }
}

@media (min-width:500px){
    .card {
        width: 350px;
        margin: 10px;
    }
}

</style>