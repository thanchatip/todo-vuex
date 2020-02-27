import '@firebase/firestore'
import db from '../firestore'

function getTodo () {
  const editTodo = this
  db.collection('todos').doc(this.$route.params.id).get().then(function (doc) {
    if (doc.exists) {
      console.log('mounted')
      editTodo.taskEditText = doc.data().task
      editTodo.descriptionEditText = doc.data().description
    }
  })
}
export default getTodo
