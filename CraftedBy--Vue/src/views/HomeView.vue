<script>
import BestSellers from './BestSellers.vue'
import Recommended from './Recommended.vue'

export default {
  components: {
    BestSellers,
    Recommended
  }
}
</script>

<template>
  <main>
    <div class="main--container">
      <div class="w-screen h-screen bg-landing-page bg-cover bg-top flex justify-center items-center">
        <div class="w-5/6 h-3/6 flex flex-col justify-between items-center">
          <div class="h-3/6 flex flex-col justify-between items-center text-white">
            <h1 class="font-ryman-eco text-3xl text-center">Welcome to CraftedBy</h1>

            <p class="font-dm-sans-extralight italic text-base text-center">
              Empowering artisans globally by providing a platform to showcase their craftsmanship, while fostering a community that celebrates the beauty of unique creations
            </p>
          </div>

          <a class="w-36 btn btn-outline font-ryman-eco text-white rounded-none hover:bg-black hover:text-white animate-bounce">SHOP NOW</a>
        </div>
      </div>
      
      <BestSellers />
      
      <Recommended />

    </div>
  </main>
</template>
