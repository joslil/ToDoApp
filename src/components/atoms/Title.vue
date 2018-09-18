<template>
   <span id= "title">{{ text }}</span>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String
  }
}
</script>

<style scoped>
#title{
  margin: 1px 1px;
}
</style>