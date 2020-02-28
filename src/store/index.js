import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{

      task: '넌 내 기억을 지워야 돼 Im poison',
      description: 'I know I cant take it no more'
    },
    {

      task: 'This is love 온몸에 퍼진',
      description: '내 모든 Fear 내 속의 상처'
    },
    {

      task: '매일 내가 너로 아파도',
      description: 'The way I love The way I love'
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
    'DELETE_ITEM' (state, index) {
      // var index = state.items.findIndex(item => item.id === payload)
      state.items.splice(index, 1)
      console.log(index)
    },
    'EDIT_ITEM' (state, index, payload) {
      // var index = state.items.findIndex(item => item.id === payload)
      console.log(index)
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
    },
    editItem ({ commit }, payload) {
      commit('EDIT_ITEM', payload)
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
