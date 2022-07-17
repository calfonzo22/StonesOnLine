<template>
    <div class="cart-item-card">
        <h3>Cart Total: ${{cart_total.toFixed(2)}}</h3>
        <div class="view-product-button">Pay by Credit Card</div>

        </div>

</template>
<script>
    export default {
        props: ['product'],
        computed: {
            cart_total(){
                return this.$store.getters.cartTotal
            }
        }
    }
</script>
