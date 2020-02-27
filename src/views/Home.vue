<template>
  <div class="home">
    <ul>
      <li v-for="item in allItems" v-bind:key="item.id">
        {{item.id}}>>>>>{{item.task}}
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
    <input @keyup.enter="save" type="text" v-model="task">
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
    }
  }
}
</script>
