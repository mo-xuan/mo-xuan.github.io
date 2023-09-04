import * as BABYLON from 'babylonjs'

export default defineNuxtPlugin((nuxtApp)=> {
  // @ts-ignore
  nuxtApp.vueApp.use(BABYLON)
})
