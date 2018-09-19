<template>
  <div class="list-item">
    <CheckBox v-bind:checked="completed" v-on:checkedChanged = "checkboxValueChanged($event)"/>  {{ item }}
    <DeleteButton v-on:buttonDeleteClicked = "buttonDelete(id)" />
  </div>
</template>

<script>
import CheckBox from '../../components/atoms/CheckBox.vue'
import DeleteButton from '../../components/atoms/DeleteButton.vue'

export default {
  name: "ListItem",
  props: {
    id: Number,
    item: String,
    completed: Boolean
  },
  components: {
    CheckBox,
    DeleteButton
  },
  methods: {
    checkboxValueChanged(checked)
    {
      //alert('Checked in ListItem ')
      this.$emit('itemChecked', checked)
    },
    buttonDelete(id){
      //this.$emit('buttonDeleteClicked');
      const index = this.$store.state.todos.findIndex(item => item.id == id);
      this.$store.state.todos.splice(index,1);
      //alert('Delete i ListItem ' + index)
    }
  }
}
</script>

<style scoped>

</style>
