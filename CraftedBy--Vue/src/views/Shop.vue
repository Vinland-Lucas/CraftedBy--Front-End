<script>
    import ProductCard from '../components/ProductCard.vue';

    export default {
        components: {
            ProductCard
        } 
    }
</script>

<template>
    <main>
        <div id="shop" class="main--container bg-timberwolf">
            <div class="w-screen h-auto py-[46px] flex justify-center">
                <div class="w-1/2 h-12 border border-solid border-black bg-white flex justify-evenly items-center ">
                    <button type="button">
                        <i-ph-magnifying-glass style="font-size: 20px; stroke: black; stroke-width: 9px;"></i-ph-magnifying-glass>
                    </button>

                    <form method="GET">
                        <input id="searchbar" class="font-dm-sans-extralight" type="text" placeholder="Search something..." maxlength="80">
                    </form>
                </div>
            </div>


            <div class="w-screen h-auto px-27px">
                <div class="font-ryman-eco text-3xl text-black text-center mb-38px pt-[46px] border-t border-solid border-black">
                    <h2>SHOP</h2>
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
        </div>
    </main>


</template>