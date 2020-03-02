import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
      id: 0,
      task: '넌 내 기억을 지워야 돼 Im poison',
      description: 'I know I cant take it no more'
    },
    {
      id: 1,
      task: 'This is love 온몸에 퍼진',
      description: '내 모든 Fear 내 속의 상처'
    },
    {
      id: 2,
      task: '매일 내가 너로 아파도',
      description: 'The way I love The way I love'
    }]
  },
  mutations: {
    'ADD_TODO' (state, payload) {
      var newTask = {
        id: payload.id,
        task: payload.task,
        description: payload.description
      }
      state.todos.push(newTask)
    },
    'EDIT_TODO' (state, todo) {
      state.todos[todo.id] = {
        id: todo.id,
        task: todo.task,
        description: todo.description
      }
      console.log('updated !!')
    },
    'DELETE_TODO' (state, index) {
      state.todos.splice(index, 1)
      console.log('deleleted !!')
    },
    'MOVE_UP' (state, index) {
      if (index === 0) {
        return
      }
      const todo = state.todos[index]
      state.todos.splice(index, 1)
      state.todos.splice(index - 1, 0, todo)
    },
    'MOVE_DOWN' (state, index) {
      if (index === state.todos.length - 1) {
        return
      }
      const todo = state.todos[index]
      state.todos.splice(index, 1)
      state.todos.splice(index + 1, 0, todo)
    }
  },
  actions: {
    addTodo ({ commit }, payload) {
      commit('ADD_TODO', payload)
    },
    deleteTodo ({ commit }, payload) {
      commit('DELETE_TODO', payload)
    },
    editTodo ({ commit }, payload) {
      commit('EDIT_TODO', payload)
    },
    moveUpTodo ({ commit }, payload) {
      commit('MOVE_UP', payload)
    },
    moveDownTodo ({ commit }, payload) {
      commit('MOVE_DOWN', payload)
    }
  },
  getters: {
    todoCount (state) {
      return state.todos.length
    },
    allTodos (state) {
      return state.todos
    }
  }
})
