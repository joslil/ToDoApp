import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [
            {
              id: '0',
              name: 'Laga mat till Martin',
              completed: true
            },
            {
              id: '1',
              name: 'Snickra ihop en stege',
              completed: true
            },
            {
              id: '2',
              name: 'Säga hej till grannen',
              completed: false
            } 
          ]
    },
    getters: {
      remaining(state){
        return state.todos.filter(todo => !todo.completed).length
      },
      anyRemaining(state, getters){
        return getters.remaining != 0
      }
    }
})