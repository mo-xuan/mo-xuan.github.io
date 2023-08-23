<script setup lang="ts">

</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img
          alt="cat"
          src="~/assets/img/cat.jpg"
          class="rounded-lg shadow-2xl"
      />
      <div>
        <h1 class="text-5xl font-bold">Xuan</h1>
        <p class="py-6">Front-end development engineer</p>
        <nuxt-link to="/skill">
          <button class="btn btn-primary">Get To Know Me</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
