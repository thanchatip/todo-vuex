import '@firebase/firestore'
import db from '../firestore'

function updateTodoText () {
  if (this.taskEditText.trim().length !== 0) {
    db.collection('todos').doc(this.$route.params.id).update({
      task: this.taskEditText,
      description: this.descriptionEditText
    }).then(
      console.log((this.taskEditText.trim().length)),
      this.currentlyEditing = null,
      this.taskEditText = '',
      this.descriptionEditText = '',
      console.log('saved !!'),
      this.$router.push({ path: '/' }))
  } else {
    console.log('empty')
    this.emptyEdit = true
  }
} export default updateTodoText
