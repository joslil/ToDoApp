<template>
  <span class="checkbox">
    <input type="checkbox" id="checkbox-input" v-model= "checked" @change= "checkboxChecked()">
  </span>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    checked: Boolean
  },
  methods: {
    checkboxChecked() {
      //alert('check')
      this.$emit('checkedChanged', this.checked)
    }
  }
}

</script>

<style scoped>
.checkbox{
  height: 40px;
  width: 40px;
  margin-top: 20px;
  color: white;
}
</style>
