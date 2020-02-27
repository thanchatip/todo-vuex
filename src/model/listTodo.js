import '@firebase/firestore'
import db from '../firestore'

function listTodo () {
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
  this.todos = todolist
}
export default listTodo
