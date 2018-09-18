<template>
    <span class="todo-item-input">
        <input type="text"  v-model= "input" placeholder= "Att göra..." id="new-todo-item-input"  @change="$emit('addTextEvent', input)">
    </span>
</template>

<script>
export default {
    name: "todoItemInput",
    props: {
        input : Text
    }
}
</script>

<style scoped>
 #new-todo-item-input{
     font-family: Tahoma;
     border-radius: 12px;
     font-size: 20px;
     padding: 5px;
    margin: 10px;
 }
</style>
