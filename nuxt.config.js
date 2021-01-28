export default {
    components: true,
    head: {
        titleTemplate: "%s - Mastering Nuxt ",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ['my-style']
        },
        meta: [{
            charset: 'utf-8'
        }]
    },
    router: {
        prefetchLinks: false
    }
}
