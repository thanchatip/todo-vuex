<template>
  <div class="home">

      <div class="card mb-2" v-for="item in allItems" v-bind:key="item.id">
        <div class="card-body">
        <h4 class="card-title">Task : {{ item.task }}</h4>
        <p class="card-text">Description : {{ item.description }}</p>
        </div>
         <div class="row">
          <div class="col-auto mr-auto">
            <button @click="editItem(item.id)" class="btn btn-primary"> Edit </button>
                &nbsp;
              <button @click="deleteItem(item.id)" class="btn btn-danger" >Delete</button>&nbsp;
          </div>

         <div class="col-auto">
            <button  type="button" class="btn btn-outline-info"> Up
            </button>&nbsp;
            <button type="button" class="btn btn-outline-info"> Down </button>
         </div>
         </div>
         <br>
      </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      task: '',
      description: ''
    }
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
    save () {
      this.addItem(this)
      // this.newId++
      this.task = ''
      this.description = ''
    }
  }
}
</script>
<style>
 @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
</style>
