<script>

</script>

<template>
    <div class="product-card w-pc-width h-pc-height bg-transparent shadow-sm mb-3.5 font-dm-sans-light">
        <div class="product-image w-pc-width h-40">
            <a href="/">
                <img 
                    src="../../public/pexels-aidan-nguyen-2735644.webp" alt="Crafted Knife" 
                    style="width: 100%; height: 100%; object-fit: cover; object-position: center;"
                />
            </a>
        </div>

        <div class="product-infos py-3 ">
            <h3 class="text-base font-normal leading-none tracking-tight mb-2.5"><a href="/">Valorant Knife de Zinzin #Slash</a></h3>

            <div>
                <span class="text-xs leading-none">Color</span>

                <div class="flex gap-1.5 mt-1 mb-2.5">
                    <button type="button" class="w-7 h-7 bg-yellow-950 border-[0.5px] border-white"></button>
                    <button type="button" class="w-7 h-7 bg-orange-100 border-[0.5px] border-white"></button>
                    <button type="button" class="w-7 h-7 bg-slate-100 border-[0.5px] border-white"></button>
                </div>
            </div>
            
            <div class="flex justify-between mt-3">
                <div class="flex">
                    <i-ph-star style="font-size: 11px;"></i-ph-star>
                    <i-ph-star style="font-size: 11px;"></i-ph-star>
                    <i-ph-star style="font-size: 11px;"></i-ph-star>
                    <i-ph-star style="font-size: 11px;"></i-ph-star>
                    <i-ph-star style="font-size: 11px;"></i-ph-star>
                </div>

                <div class="text-[11px]">+ 500 Reviews</div>
            </div>

        </div>

        <div class="flex justify-center w-full">
            <button type="button" class="btn btn-active px-8 rounded-none font-normal text-white bg-black">ADD TO CART</button>
        </div>
    </div>
</template>