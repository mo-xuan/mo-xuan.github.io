<script setup lang="ts">

</script>

<template>
  <div class="mockup-browser border bg-base-300 h-screen">
    <div class="mockup-browser-toolbar">
      <div class="input">https://xuan.dev</div>
    </div>
    <div class="flex flex-col justify-center px-4 py-16 bg-base-200 h-screen">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-primary">Vue</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-secondary">Nuxt</div>
      </div>
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-accent">Babylonjs</div>
      </div>
      <div class="chat chat-end">
        <nuxt-link to="/">
          <button class="btn btn-primary">Back To The Homepage</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
