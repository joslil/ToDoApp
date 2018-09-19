<template>
  <span class="checkbox">
    <input type="checkbox" id="checkbox-input"  @change= "checkboxChecked()">
    <label class="checkbox-label">{{ label }}</label>
  </span>
</template>

<script>
export default {
  name: 'CheckboxAll',
  props: {
    label: String
  },
  methods: {
    checkboxChecked() {
      //alert('check ' + this.anyRemaining)
      this.$emit('checkedChanged', event.target.checked)
    }
  }
}

</script>

<style scoped>
.checkbox{
  height: 40px;
  width: 40px;
  margin-top: 20px;
  margin-left: 10px;
  color: white;
}
.checkbox-label{
  color: gray;
}
</style>
