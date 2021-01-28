<template>
  <div>
    <div v-for="home in homes" :key="home.objectID" style="float: left;margin: 10px">
      <home-card :home="home"/>
  </div>
  </div>
</template>

<script>
import homes from '../data/homes.json'
import HomeCard from "~/components/HomeCard";
export default {
  name: "index",
  components: {HomeCard},
  data:() =>({
    homes:homes.slice(0,3)
  })
}
</script>

<style scoped>

</style>
