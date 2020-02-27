import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: ['cause', 'im', 'your']
  },
  mutations: {
    'ADD_ITEM' (state, payload) {
      state.items.push(payload)
    },
    'DELETE_ITEM' (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
    // firebase query here
    // logic code here
    addItem ({ commit }, item) {
      commit('ADD_ITEM', item)
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
