<template>
  <div>
    index
    <!--    <Tutorial/>-->
    <a href="/list?id=1">a链接的形式（会刷新页面）</a>
    <!--    <nuxt-link to="/list">link的形式（不会刷新页面）</nuxt-link>-->
    <nuxt-link :to="{name:'list',query:{id:1},params:{id:2}}">link的形式（不会刷新页面）</nuxt-link>
    <button @click="goList">JS的形式</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  // middleware: 'auth',
  // middleware(){
  //   console.log('middleware index')
  // },

  // validate({params, query}) {
  //   return /^\d+$/.test(query.id)
  // },

  asyncData({store, params}) {
    console.log('asyncData')
  },

  fetch({app, store, params}) {
    console.log('fetch')
  },

  methods: {
    goList() {
      // this.$router.push('/list')
      this.$router.push({
        name: 'list',
        query: {id: 1},
        params: {id: 2}
      })
    }
  }
})
</script>
