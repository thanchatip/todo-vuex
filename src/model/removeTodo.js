import '@firebase/firestore'
import db from '../firestore'

function removeTodo (collectionID) {
  db.collection('todos').doc(collectionID).delete().then(function () {})
    .catch(function (error) {
      console.error('Error removing document: ', error)
    })
  this.loadTodo()
} export default removeTodo
