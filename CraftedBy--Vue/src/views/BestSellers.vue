<script>
    import ProductCard from '../components/ProductCard.vue'

    export default {
        components: {
            ProductCard
        }
    }
</script>

<template>
    <div class="best--sellers w-screen h-screen bg-timberwolf px-27px">
        <div class="font-ryman-eco text-3xl text-black text-center mb-38px pt-8">
            <h1>BEST SELLERS</h1>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-4">
            <div class="row-span-1 col-span-1">
                <ProductCard />
            </div>
        </div>

    </div>
</template>