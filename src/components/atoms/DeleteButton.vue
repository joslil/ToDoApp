<template>
    <!-- <button id="button" type="button" v-on:click="deleteClick()">{{label}}</button> -->
    <span><font-awesome-icon icon="trash-alt" id="fa-delete-icon" v-on:click="deleteClick()"  /></span>
</template>

<script>
export default {
  name: 'deleteButton',
  methods : {
        deleteClick() {
            this.$emit('buttonDeleteClicked');
            //alert('Click i DeleteButton');
        }
  }  
}
</script>

<style scoped>
#fa-delete-icon{
    color: rgb(109, 107, 107);
}
span{
    margin-left: 30px;
}
/* #button-span{
    margin: 20px;
} */
</style>
