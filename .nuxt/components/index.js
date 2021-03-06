export { default as HomeCard } from '../../components/HomeCard.vue'
export { default as ShortText } from '../../components/ShortText.vue'

export const LazyHomeCard = import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => c.default || c)
export const LazyShortText = import('../../components/ShortText.vue' /* webpackChunkName: "components/short-text" */).then(c => c.default || c)
