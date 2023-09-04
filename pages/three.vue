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

    this.scene.debugLayer.show({
      embedMode: true
    })

    this.init()

    this.engine.runRenderLoop(()=> {
      this.scene.render()
    })
  }

  async init() {


    const sphere = BABYLON.MeshBuilder.CreateSphere('spere', {
      diameter: 0.1, segments: 32,
    })
    sphere.position.y = 0.5
    sphere.position.x = 0.1

    const cylinder1 = BABYLON.MeshBuilder.CreateCylinder('cylinder', {
      height: 0.5,
      diameter: 0.1
    })
    cylinder1.position.y = 0.12
    cylinder1.position.x = 0.1

    const cylinder2 = BABYLON.MeshBuilder.CreateCylinder('cylinder', {
      height: 0.4,
      diameter: 0.1
    })
    cylinder2.position.y = 0.12
    cylinder2.position.x = 0.3


    const cylinder3 = BABYLON.MeshBuilder.CreateCylinder('cylinder', {
      height: 0.3,
      diameter: 0.1
    })
    cylinder3.position.y = 0.12
    cylinder3.position.x = 0.5


    const cylinder4 = BABYLON.MeshBuilder.CreateCylinder('cylinder', {
      height: 0.2,
      diameter: 0.1
    })
    cylinder4.position.y = 0.12
    cylinder4.position.x = 0.7

    const ground = BABYLON.MeshBuilder.CreateGround("ground",
        {width: 2, height: 2})
    ground.position.y = 0.02

    //直接输入json
 /*   const serializedAnimations = JSON.parse('{"animations":[{"name":"move","property":"position","framePerSecond":60,"dataType":1,"loopBehavior":1,"blendingSpeed":0.01,"keys":[{"frame":0,"values":[0.08061218529119778,0.6978712040923624,0,[0,0,0],[0,0,0]]},{"frame":10.724925521350546,"values":[0.10041967034339905,0.4122222363948822,0.00008334660378750414,[0.005070657660090817,0.0016663171610429768,0.000014957963743651997],[0.005070657660090817,0.0016663171610429768,0.000014957963743651997]]},{"frame":18.74551597927363,"values":[0.20418916642665863,0.8245129122235532,0.00026503679691813886,[0.008469398996492017,0.004489608286054648,0.000024838403081625154],[0.008469398996492017,0.004489608286054648,0.000024838403081625154]]},{"frame":28.30188679245283,"values":[0.30496978759765625,0.36876171827316284,0.0005088436300866306,[0.010611963657935475,0.005518804860450876,0.00003188704603166564],[0.010611963657935475,0.005518804860450876,0.00003188704603166564]]},{"frame":35.47062672690852,"values":[0.4195043444633484,0.6194142455848128,0.0008143056184053421,[0.011933396554682833,0.008512972495134876,0.00003683957651756056],[0.011933396554682833,0.008512972495134876,0.00003683957651756056]]},{"frame":44.98510427010923,"values":[0.4989493787288666,0.3251393139362335,0.0011139578418806195,[0.012375846435779487,0.009979239726755462,0.000039239947124695954],[0.012375846435779487,0.009979239726755462,0.000039239947124695954]]},{"frame":52.31814602357169,"values":[0.6068465885427015,0.5392664499721471,0.001456649256657273,[0.012484467886118206,0.01370901743039461,0.00003971176524197081],[0.012484467886118206,0.01370901743039461,0.00003971176524197081]]},{"frame":59.98013902681232,"values":[0.7071666717529297,0.27318790555000305,0.0017061753896996379,[0.012115188260123918,0.015263319784206558,0.00003860568505811019],[0.012115188260123918,0.015263319784206558,0.00003860568505811019]]},{"frame":60.08806807853318,"values":[0.7074929276576567,1,0.002712107683192203,[0,0,0],[0,0,0]]}],"ranges":[]}]}').animations
    let animations = new Array();
    for (let serializedAnimation of serializedAnimations) {
      animations.push(BABYLON.Animation.Parse(serializedAnimation));
    }
    sphere.animations = animations*/

    //导入json文件
    let animations = await BABYLON.Animation.ParseFromFileAsync("", "/move.json") as BABYLON.Animation[]
    sphere.animations = animations
    this.scene.beginAnimation(sphere, 0, 100, true);
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
