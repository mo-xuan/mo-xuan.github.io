<script setup lang="ts">
const webglRef = ref<HTMLCanvasElement | null>(null)

let babylonApp: BabylonApp

function windowResize() {
  babylonApp.engine.resize()
}

onMounted(()=> {
  if(webglRef.value) {
    babylonApp = new BabylonApp(webglRef.value)
    window.addEventListener('resize', windowResize)
  }
})

onUnmounted(()=> {
  window.removeEventListener('resize', windowResize)
})

class BabylonApp {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;

  constructor(private  canvas: HTMLCanvasElement) {
    this.engine = new BABYLON.Engine(this.canvas, true)
    this.scene = new BABYLON.Scene(this.engine)

    this.scene.createDefaultCamera(true,true,true)
    this.scene.createDefaultLight()
    this.scene.createDefaultEnvironment()

    this.init()

    this.engine.runRenderLoop(()=> {
      this.scene.render()
    })
  }

  init() {
    const box = BABYLON.MeshBuilder.CreateBox('box', {
      size: 0.1
    })
    box.position.y = 0.05
  }
}

</script>

<template>
  <canvas ref="webglRef" class="canvas"></canvas>
</template>

<style scoped>
.canvas{
  width: 100%;
  height: 100%;
}
</style>
