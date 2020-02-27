<template>
  <div class="home">
    <ul>
      <li v-for="(item,index) in allItems" :key="index">
        {{index+1}}:{{item}}
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
    <input ref="item" @keyup.enter="save" type="text" v-model="item">
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
      item: ''
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
      this.addItem(this.item)
      this.item = ''
      this.$refs.item.focus()
    }
  }
}
</script>
