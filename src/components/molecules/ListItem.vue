<template>
  <div class="list-item">
    <CheckBox v-bind:checked="completed" v-on:checkedChanged = "checkboxValueChanged($event)"/>  {{ item }}
    <DeleteButton v-on:buttonDeleteClicked = "buttonDelete()" />
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
    buttonDelete(){
      this.$emit('buttonDeleteClicked');
      //alert('Delete i ListItem ' + this.id)
    }
  }
}
</script>

<style scoped>

</style>
