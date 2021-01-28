<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <img :src="home.images[0]" style="width: 200px"><br>
    {{ home.title }}<br>
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}<br>
    {{ home.guests }} guests <br>
    {{ home.pricePerNight }} / night <br>

  </div>
</template>

<script>
export default {
  props: {
    home: {
      type: Object,
      required: true
    }
  },
  name: "home-card",

}
</script>

<style scoped>

</style>
