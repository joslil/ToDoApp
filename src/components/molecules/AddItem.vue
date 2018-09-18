<template>
    <div class="AddItem">
        <h3>{{ label }}</h3>
        <TextInput v-on:addTextEvent = "addTextInput($event)" />
        <AddButton label="Lägg till" v-on:buttonAddClicked = "addItemInput()"/>
    </div>
</template>

<script>
import TextInput from '../../components/atoms/TextInput.vue'
import AddButton from '../../components/atoms/AddButton.vue'

export default {
  name: 'AddItem',
  props: {
      label: String
  },
  components: {
      TextInput,
      AddButton
  },
  data: function () {
    return { 

    }
  },
  methods: {
      addTextInput: function(inputTxt){
          this.$emit('addTextInputEvent', inputTxt);
          //alert('Input i AddItem: ' + textInput);
      },
      addItemInput: function(){
        this.$emit('buttonAddClicked');
        //alert('Click i AddItem');
      }
  }
}
</script>

<style scoped>
.AddItem{
    
}
.todo-item-input{
    box-sizing: border-box;
}
.add-button {
    margin-right: 10px;
}
h3{
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
}
</style>