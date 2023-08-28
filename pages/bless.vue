<script setup lang="ts">

const {$gsap, $ScrollTrigger} = useNuxtApp()
$gsap.registerPlugin($ScrollTrigger)

const MOVE_DURATION = 3

onMounted(() => {
  $gsap.to('.cat1',
      {
        rotation: 330,
        x: '10vw',
        duration: MOVE_DURATION,
        scrollTrigger: {
          trigger: '.cat1',
          toggleActions: 'restart',
          start: "top center",
        }
      }
  )

  $gsap.to('.cat2',
      {
        rotation: -330,
        x: '-10vw',
        duration: MOVE_DURATION,
        scrollTrigger: {
          trigger: '.cat2',
          toggleActions: 'restart',
          start: "top center",
        }
      }
  )

  $gsap.to('.mid-text',
      {
        x: 20,
        opacity: 1,
        duration: MOVE_DURATION,
        scrollTrigger: {
          trigger: '.mid-text',
          toggleActions: 'restart',
          start: "top center",
        }
      }
  )

  $gsap.to('.cat3',
      {
        rotation: 330,
        x: '10vw',
        duration: MOVE_DURATION,
        scrollTrigger: {
          trigger: '.cat3',
          toggleActions: 'restart',
          start: "top center",
        }
      }
  )

  $gsap.to('.cat4',
      {
        rotation: -330,
        x: '-10vw',
        duration: MOVE_DURATION,
        scrollTrigger: {
          trigger: '.cat4',
          toggleActions: 'restart',
          start: "top center",
        }
      }
  )

  $gsap.to('.end-text',
      {
        x: 20,
        opacity: 1,
        duration: MOVE_DURATION,
        scrollTrigger: {
          trigger: '.end-text',
          toggleActions: 'restart',
          start: "top bottom",
        }
      }
  )
})

</script>

<template>
  <div class="bless">
    <div class="flex justify-center text-2xl font-medium mt-10">
      请下滑，看小猫给你打招呼
    </div>
    <img
        alt=""
        src="@/assets/img/cat1.jpg"
        class="cat cat1"
    />
    <img
        alt=""
        src="@/assets/img/cat2.jpg"
        class="cat cat2"
    />
    <div class="mid-text text-2xl font-medium">
      鑫仔，仔细下滑看更多酷猫
    </div>
    <img
        alt=""
        src="@/assets/img/cat3.jpg"
        class="cat cat3"
    />
    <img
        alt=""
        src="@/assets/img/cat4.jpg"
        class="cat cat4"
    />

    <div class="end-text text-2xl font-medium text-blue-600/100">
      小猫累了，打招呼完毕
    </div>
  </div>
</template>

<style scoped>
.bless {
  position: relative;
  overflow: scroll;
  width: 100vw;
  height: 450vh;
}

.cat{
  position: absolute;
  width: 351px;
  height: auto;
}

.cat1 {
  top: 100vh;
  left: 0;
}

.cat2{
  top: 180vh;
  right: 0;
}

.cat3{
  top: 300vh;
  left: 0;
}

.cat4{
  top: 380vh;
  right: 0;
}

.mid-text{
  position: absolute;
  top: 230vh;
  left: 0;
  opacity: 0;
}

.end-text{
  position: absolute;
  top: 440vh;
  left: 0;
  opacity: 0;
}
</style>
