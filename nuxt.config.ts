export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@hypernym/nuxt-gsap'
    ],
    gsap: {
        extraPlugins: {
            scrollTrigger: true
        }
    }
})
