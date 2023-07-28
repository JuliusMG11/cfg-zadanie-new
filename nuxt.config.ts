// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {

    },
    modules: [
        // ...
        '@pinia/nuxt',
      ],
    css: [
        '@/assets/scss/main.scss',
        '@/assets/css/main.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
