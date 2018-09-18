<template>
    <button id="button" type="button" v-on:click="addClick()">{{label}}</button>
</template>

<script>
export default {
  name: 'addButton',
  props: { 
      label: String
  },
  methods : {
        addClick() {
            this.$emit('buttonAddClicked');
            //alert('Click i AddButton);
        }
  }  
}
</script>

<style scoped>
#button{
    padding: 10px 20px;
    margin: 10px;
    background-color: white;
    border-color: rgb(205, 201, 211);
    font-size: 13px;
    border-radius: 12px;
    font-family: Tahoma;
}
/* #button-span{
    margin: 20px;
} */
</style>
