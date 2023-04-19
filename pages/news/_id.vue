<template>
  <div>{{ 'id:' + id }}</div>
</template>

<script>
export default {
  name: "_id",
  data() {
    return {
      id: "",
    }
  },
  validate({params, query}) {
    return (params.id && params.id != "")
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
