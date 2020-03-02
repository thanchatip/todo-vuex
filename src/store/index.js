import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{
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
    'ADD_TODO' (state, payload) {
      var newTask = {
        id: payload.newId,
        task: payload.task,
        description: payload.description
      }
      state.todos.push(newTask)
    },
    'EDIT_TODO' (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTask = todo.task
    },
    'DELETE_TODO' (state, index) {
      state.todos.splice(index, 1)
      console.log(index)
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
      commit('EDIT_ITEM', payload)
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
