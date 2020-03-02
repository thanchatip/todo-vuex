<template>
  <div class="home">

      <div class="card mb-2" v-for="(todo,index) in allTodos" v-bind:key="todo.id">
        <div class="card-body">
        <h4 class="card-title">Task {{index + 1}} : {{ todo.task }}</h4>
        <p class="card-text">{{todo.description}}</p>
        </div>
         <div class="row">
          <div class="col-auto mr-auto">
            <button @click="edit(index,todo)" class="btn btn-primary"> Edit </button>
                &nbsp;
              <button @click="deleteTodo(index)" class="btn btn-danger">Delete</button>&nbsp;
          </div>

         <div class="col-auto">
            <button  v-if="index !== 0" @click="moveUpTodo(index)" type="button" class="btn btn-outline-info"> Up
            </button>&nbsp;
            <button v-if="index !== todoCount-1" type="button" @click="moveDownTodo(index)" class="btn btn-outline-info"> Down </button>
         </div>
         </div>
         <br>
      </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      id: '',
      task: '',
      description: ''
    }
  },
  computed: {
    ...mapGetters({
      todoCount: 'todoCount',
      allTodos: 'allTodos'
    })
  },
  methods: {
    ...mapActions({
      addTodo: 'addTodo',
      deleteTodo: 'deleteTodo',
      editTodo: 'editTodo',
      moveUpTodo: 'moveUpTodo',
      moveDownTodo: 'moveDownTodo'
    }),
    edit (index, todo) {
      this.$router.push({ name: 'edit', params: { id: index, task: todo.task, description: todo.description } })
    }
  }
}
</script>
<style>
 @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
</style>
