import Vue from 'vue'
import Vuex from 'vuex'
import '@firebase/firestore'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  firestore () {
    return {
      todos: db.collection('todos')
    }
  },
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
      db.collection('todos').add({
        task: payload.task,
        description: payload.description
      })
      state.todos.push(newTask)
    },
    'LOAD_TODO' (state) {
      const todolist = []
      db.collection('todos').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const todo = {
            id: doc.id,
            task: doc.data().task,
            description: doc.data().description
          }
          todolist.push(todo)
        })
      })
      state.todos = todolist
    },
    'EDIT_TODO' (state, payload) {
      state.todos[payload.id] = {
        id: payload.id,
        task: payload.task,
        description: payload.description
      }
    },
    'DELETE_TODO' (state, payload) {
      state.todos.splice(payload, 1)
      db.collection('todos').doc(payload).delete().then(function () {})
        .catch(function (error) {
          console.error('Error removing document: ', error)
        })
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
    loadTodo ({ commit }, payload) {
      commit('LOAD_TODO', payload)
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
