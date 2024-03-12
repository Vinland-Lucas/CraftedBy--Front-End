<script>

</script>

<template>
    <main>
        <div id="productpage" class="main--container bg-timberwolf text-black">
            <div class="w-screen h-96">
                <img 
                    src="../../public/pexels-aidan-nguyen-2735644.webp" alt="Crafted Knife"
                    style="width: 100%; height: 100%; object-fit: cover; object-position: center;"
                />
            </div>

            <div class="w-screen h-auto font-dm-sans-extralight px-[30px]">
                <h1 class="font-ryman-eco text-3xl text-center py-8">Valorant Knife de Zinzin #Slash</h1>

                <p class="text-sm text-justify pb-8">
                    Explorez l'artisanat de qualité avec notre couteau haut de gamme. Fabriqué avec précision par des artisans experts, il allie performance et durabilité pour des découpes impeccables à chaque utilisation.
                </p>


                <div class="h-auto">
                    <div id="color" class="pb-6">
                        <h2 class="text-lg mb-2.5">Color</h2>

                        <div class="flex flex-wrap gap-2">
                            <button type="button" class="btn btn-active w-[2.125rem] h-[2.125rem] min-h-0 rounded-none bg-yellow-950 border-[0.5px] border-white"></button>
                            <button type="button" class="btn btn-active w-[2.125rem] h-[2.125rem] min-h-0 rounded-none bg-orange-100 border-[0.5px] border-white"></button>
                            <button type="button" class="btn btn-active w-[2.125rem] h-[2.125rem] min-h-0 rounded-none bg-slate-100 border-[0.5px] border-white"></button>
                            <button type="button" class="btn btn-active w-[2.125rem] h-[2.125rem] min-h-0 rounded-none bg-rose-200 border-[0.5px] border-white"></button>
                        </div>
                    </div>

                    <div id="size" class="pb-6">
                        <h2 class="text-lg mb-2.5">Size</h2>

                        <div class="dropdown w-full ">
                            <div tabindex="0" role="button" class="w-full h-[2.125rem] min-h-0 btn rounded-none border border-solid border-black">Choose your size</div>
                            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-slate-50 w-full border-x border-b border-solid border-black">
                                <li><a>Small (25x25)</a></li>
                                <li><a>Medium (50x50)</a></li>
                                <li><a>Large (100x100)</a></li>
                            </ul>
                        </div>
                    </div>

                    <div id="material" class="pb-10">
                        <h2 class="text-lg mb-2.5">Material</h2>

                        <div class="dropdown w-full ">
                            <div tabindex="0" role="button" class="w-full h-[2.125rem] min-h-0 btn rounded-none border border-solid border-black">Choose your material</div>
                            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-slate-50 w-full border-x border-b border-solid border-black">
                                <li><a>Wood</a></li>
                                <li><a>Coton</a></li>
                                <li><a>Iron</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center w-full pb-12">
                    <button type="button" class="btn btn-active w-full px-8 rounded-none font-normal text-white bg-black">ADD TO CART | 120.00€</button>
                </div>

                <div id="more-infos" class="pb-8">
                    <div id="about-craftsman" class="border-y border-solid border-black p-4">About Craftsman</div>
                    <div id="products-details" class="border-b border-solid border-black p-4">Product Details</div>
                    <div id="how-to-use" class="border-b border-solid border-black p-4">How to use</div>
                </div>
            </div>
        </div>
    </main>
</template>