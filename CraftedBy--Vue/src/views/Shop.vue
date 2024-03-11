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
        <div id="shop" class="main--container bg-timberwolf text-black">

            <div class="w-screen h-auto pt-[46px] pb-6 flex flex-col ">
                <div class="w-screen h-auto pb-10 flex justify-center items-center">
                    <div class="w-2/3 h-12 border border-solid border-black bg-white flex justify-start items-center ">
                        <button type="button" class="pl-2.5">
                            <i-ph-magnifying-glass style="font-size: 20px; stroke: black; stroke-width: 9px;"></i-ph-magnifying-glass>
                        </button>

                        <form method="GET" class="w-[85%] pl-3">
                            <input type="text" placeholder="Search something..." maxlength="80" class="font-dm-sans-extralight input input-ghost w-full max-w-xs h-5/6 p-0 focus:border-0 focus:outline-none focus:rounded-none" />
                        </form>

                    </div>

                    <button type="button" class="w-10 h-10 min-h-0 btn btn-active p-0 rounded-none flex justify-center items-center ml-3 bg-white border border-solid border-black">
                        <i-ph-sliders style="font-size: 20px"></i-ph-sliders>
                    </button>

                </div>

                <div class="w-screen h-auto ps-4 pe-4 flex gap-2.5 font-dm-sans-extralight">
                    <button type="button" class="w-fit h-fit min-h-0 btn btn-active py-2.5 px-3 rounded-none bg-transparent border border-solid border-black focus:bg-white">ALL</button>
                    <button type="button" class="w-fit h-fit min-h-0 btn btn-active py-2.5 px-3 rounded-none bg-transparent border border-solid border-black focus:bg-white">ON SALES</button>
                    <button type="button" class="w-fit h-fit min-h-0 btn btn-active py-2.5 px-3 rounded-none bg-transparent border border-solid border-black focus:bg-white">BEST SELLERS</button>
                    <button type="button" class="w-fit h-fit min-h-0 btn btn-active py-2.5 px-3 rounded-none bg-transparent border border-solid border-black focus:bg-white">NEWS</button>
                </div>

            </div>    


            <div class="w-screen h-auto px-27px">
                <div class="font-ryman-eco text-3xl text-center mb-38px pt-[46px] border-t border-solid border-black">
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