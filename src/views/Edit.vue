<template>
  <div>
      <div v-if="createError" class="alert alert-danger" role="alert">
        จำเป็นต้องกรอก Todo ก่อนถึงจะบันทึกได้
      </div>
      <div class="form-group">
        <label>Input Todo</label>
        <input v-model="todo.title" @click="createError = false" type="text" class="form-control">
        <small class="form-text text-muted">Required*</small>
      </div>
      <div class="form-group">
        <label>Description</label>
        <input v-model="todo.description" type="text" class="form-control">
      </div>
      <button class="btn btn-primary" @click="cancel">Cancel</button>&nbsp;
      <button class="btn btn-primary" @click="save">Save</button>
    </div>

</template>

<script>
export default {
  data () {
    return {
      createError: false,
      todo: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    cancel () {
      this.$router.push({ name: 'Todo' })
    },
    save () {
      // call vuex save func
      console.log('save')
    }
  }
}
</script>
