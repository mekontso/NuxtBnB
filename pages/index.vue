<template>
  <div>

    <div v-for="home in homes" :key="home.objectID" style="float: left;margin: 10px">
<!--      We add no-prefetch-->
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home"/>
      </nuxt-link>
  </div>
  </div>
</template>

<script>
import homes from '../data/homes.json'
export default {
  head(){
    return{
      title: 'Homepage',
      meta:[
        {
          name: 'description',
          content:'This is a homepage!',
          hid:'description'
        }
      ]
    }
  },
  name: "index",
  data:() =>({
    homes:homes.slice(0,3)
  })
}
</script>

<style scoped>

</style>
