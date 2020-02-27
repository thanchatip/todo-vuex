import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{
      id: 0,
      task: 'Buy food at the supermarket.',
      completed: false
    },
    {
      id: 1,
      task: 'Organize the living room.',
      completed: true
    },
    {
      id: 2,
      task: 'Read every class and tutorial on Sabe.io.',
      completed: false
    }]
  },
  mutations: {
    'ADD_ITEM' (state, payload) {
      var newTask = {
        id: payload.newId,
        task: payload.task,
        completed: false
      }
      state.items.push(newTask)
    },
    'DELETE_ITEM' (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
    // firebase query here
    // logic code here
    addItem ({ commit }, payload) {
      commit('ADD_ITEM', payload)
    },
    deleteItem ({ commit }, index) {
      commit('DELETE_ITEM', index)
    }
  },
  getters: {
    itemCount (state) {
      return state.items.length
    },
    allItems (state) {
      return state.items
    }
  }
})
