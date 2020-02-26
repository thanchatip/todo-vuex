import {
  firebase
} from '@firebase/app'
import '@firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDYs65_AIaAEI3-tpayM23T-1iMjILmPwI',
  authDomain: 'vue-todo-f0129.firebaseapp.com',
  databaseURL: 'https://vue-todo-f0129.firebaseio.com',
  projectId: 'vue-todo-f0129',
  storageBucket: 'vue-todo-f0129.appspot.com',
  messagingSenderId: '480055401847',
  appId: '1:480055401847:web:f9227fc0a48d381b7b1572'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db
