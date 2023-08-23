<script setup lang="ts">

</script>

<template>
  <div class="mockup-browser border bg-base-300 h-screen">
    <div class="mockup-browser-toolbar">
      <div class="input">https://chat.dev</div>
    </div>
    <div class="flex flex-col justify-center px-4 py-16 bg-base-200 h-screen">
      <div class="chat chat-start bg-base-200">
        <div class="chat-image avatar">
          <div class="rounded-full">
            <div class="avatar online placeholder">
              <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                <span class="text-xl">Lx</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-header">
          Luo Xin
          <time class="text-xs opacity-50">15:00</time>
        </div>
        <div class="chat-bubble">我是猪!</div>
        <div class="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="rounded-full">
            <div class="rounded-full">
              <div class="avatar online placeholder">
                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <span class="text-xl">Mx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-header">
          Mo Xuan
          <time class="text-xs opacity-50">15:01</time>
        </div>
        <div class="chat-bubble">你是你是!</div>
        <div class="chat-footer opacity-50">
          Seen at 15:01
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
