<template>
  <div>
      <div v-if="createError" class="alert alert-danger" role="alert">
        จำเป็นต้องกรอก Todo ก่อนถึงจะบันทึกได้
      </div>
      <div class="form-group">
        <label>Input Todo</label>
        <input v-model="task" @click="createError = false" type="text" class="form-control">
        <small class="form-text text-muted">Required*</small>
      </div>
      <div class="form-group">
        <label>Description</label>
        <input v-model="description" type="text" class="form-control">
      </div>
      <button class="btn btn-primary" @click="cancel">Cancel</button>&nbsp;
      <button v-if="this.$route.params.task" @click="edit" class="btn btn-primary" >Save</button>
      <button v-else class="btn btn-primary" @click="save">Save</button>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      createError: false,
      id: '',
      task: '',
      description: ''
    }
  },
  mounted () {
    const editTodo = this
    editTodo.id = this.$route.params.id
    editTodo.task = this.$route.params.task
    editTodo.description = this.$route.params.description
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
      editTodo: 'editTodo'
    }),
    cancel () {
      this.$router.push({ name: 'home' })
    },
    save () {
      this.addTodo(this)
      this.task = ''
      this.description = ''
      this.$router.push({ name: 'home' })
    },
    edit () {
      this.editTodo(this)
      this.task = ''
      this.description = ''
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
