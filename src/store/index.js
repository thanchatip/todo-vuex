import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{
      id: 0,
      task: 'Buy food at the supermarket.',
      description: 'jun'
    },
    {
      id: 1,
      task: 'Organize the living room.',
      description: 'josh'
    },
    {
      id: 2,
      task: 'Read every class and tutorial on Sabe.io.',
      description: 'boo'
    }]
  },
  mutations: {
    'ADD_ITEM' (state, payload) {
      var newTask = {
        id: payload.newId,
        task: payload.task,
        description: payload.description
      }
      state.items.push(newTask)
    },
    'DELETE_ITEM' (state, payload) {
      var index = state.items.findIndex(item => item.id === payload)
      state.items.splice(index, 1)
    }
  },
  actions: {
    // firebase query here
    // logic code here
    addItem ({ commit }, payload) {
      commit('ADD_ITEM', payload)
    },
    deleteItem ({ commit }, payload) {
      commit('DELETE_ITEM', payload)
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
