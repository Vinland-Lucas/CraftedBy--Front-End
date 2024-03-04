<script>
    import ProductCard from '../components/ProductCard.vue'

    export default {
        components: {
            ProductCard
        }
    }
</script>

<template>
    <div class="best--sellers w-screen h-auto bg-timberwolf px-27px">
        <div class="font-ryman-eco text-3xl text-black text-center mb-38px pt-8">
            <h2>BEST SELLERS</h2>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 gap-4 pb-8">
            <div class="row-start-1 col-span-1">
                <ProductCard />
            </div>

            <div class="row-start-1 col-start-2 col-span-1">
                <ProductCard />
            </div>

            <div class="row-start-2 col-span-1">
                <ProductCard />
            </div>

            <div class="row-start-2 col-start-2 col-span-1">
                <ProductCard />
            </div>

        </div>

    </div>
</template>