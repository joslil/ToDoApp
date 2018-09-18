<template>
  <div class="list">  
    <AddItem label="Vad behöver du göra?" v-on:addTextInputEvent = "addTextEvent($event)" v-on:buttonAddClicked = "buttonAddClicked()"/>
    <div v-for="(todo,index) in this.$store.state.todos" :key="todo.id" id="list-item-border">
          <ListItem v-bind:item="todo.name" v-bind:id="todo.id" v-bind:completed="todo.completed" 
                    v-on:itemChecked = "itemCheckedChanged($event, index)" class="list-item" :class="{ completed : todo.completed }"
                    v-on:buttonDeleteClicked = "buttonDeleteClicked(index)"
          />
    </div>
    <hr>
    <CheckBox v-on:checkedChanged = "checkboxAllClicked($event)" :checked= "!anyRemaining"/> <label class="checkbox-label">Alla</label><br/>
    <label class= "item-count-label"> {{ remaining }} kvar att göra</label>
  </div>
</template>

<script>
import ListItem from '../../components/molecules/ListItem.vue'
import AddItem from '../../components/molecules/AddItem.vue'
import CheckBox from '../../components/atoms/CheckBox.vue'

export default {
  name: "ListOfItems",
  components: {
    ListItem,
    AddItem,
    CheckBox
  },
  data(){
    return{
      newTodo: ''      
    }
  },
  methods: {
      addTextEvent(inputTxt){
        this.newTodo = inputTxt;
          //alert('Input i ListOfItems: ' + this.newTodo);
      },
      buttonAddClicked(){
          this.$store.state.todos.push({
              id: this.$store.state.todos.length + 1,
              name: this.newTodo,
              completed: false
          })
          //alert('Click i ListOfItems');
      },
      itemCheckedChanged(checked, index){
        this.$store.state.todos[index].completed = checked;
        //alert(index);
      },
      buttonDeleteClicked(index)      {
          this.$store.state.todos.splice(index,1);
      },
      checkboxAllClicked(checked){
        //alert('checkbox all clicked ' )
        this.$store.state.todos.forEach(todo => {
          todo.completed = checked;
        });
         
      }
  },
  computed: {
    remaining(){
      return this.$store.getters.remaining
    },
    anyRemaining(){
      return this.$store.getters.anyRemaining
    }
  }  
}
</script>

<style scoped>
.list{
  text-align: left;
}
.list-item{
  margin: 10px;
}
.completed{
  text-decoration: line-through;
  color: grey;
}
.checkbox{
  margin-left: 10px;
}
.checkbox-label{
  color: gray;
}
.item-count-label{
  color: gray;
  margin: 10px;
}
</style>
