<template>
    <div id="ToDoTitle">
        <Title class="title" text= "TO"></Title>
        <font-awesome-icon icon="list-alt" id="fa-list-icon" />
        <Title class="title" text= "DO"></Title>
    </div>
</template>

<script>
import Title from '../../components/atoms/Title.vue'

export default {
  name: 'ToDoTitle',
  components: {
      Title
  }
}
</script>

<style scoped>
#fa-list-icon{
    height: 30px;
    width: 30px;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
}
#title{
    width: 50%;
}
#ToDoTitle{
    background: rgb(205, 201, 211);
    padding: 30px;
}
.title{
    color: white;
    font-size: 40px;
}
</style>