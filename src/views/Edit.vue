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
      <button v-if="this.$route.params.task"  class="btn btn-primary" >Edit</button>
      <button v-else class="btn btn-primary" @click="save">Save</button>

    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      createError: false,
      task: '',
      description: ''
    }
  },
  mounted () {
    const editTodo = this
    editTodo.task = this.$route.params.task
    editTodo.description = this.$route.params.description
  },
  computed: {
    ...mapGetters({
      itemCount: 'itemCount',
      allItems: 'allItems'
    })
  },
  methods: {
    ...mapActions({
      addItem: 'addItem',
      deleteItem: 'deleteItem',
      editItem: 'editItem'
    }),
    cancel () {
      this.$router.push({ name: 'home' })
    },
    save () {
      this.addItem(this)
      this.task = ''
      this.description = ''
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
