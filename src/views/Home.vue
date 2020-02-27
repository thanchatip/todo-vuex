<template>
  <div class="home">
    <ul>
      <li v-for="item in allItems" v-bind:key="item.id">
        {{item.id}}>>>>>{{item.task}}>>>>>{{item.description}}
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
    <input placeholder="Enter Task" type="text" v-model="task">
    <input placeholder="Enter Description" type="text" v-model="description">
      <button @click="save" >Add Item</button>
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
      description: '',
      newId: 3
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
      deleteItem: 'deleteItem'
    }),
    save () {
      this.addItem(this)
      this.newId++
      this.task = ''
      this.description = ''
    }
  }
}
</script>
