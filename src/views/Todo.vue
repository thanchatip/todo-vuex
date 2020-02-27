<template>
  <div>
    <div v-if="todos.length === 0" class="alert alert-info" role="alert">
      ไม่มี Todo
    </div>

    <transition-group name="fadeUp" tag="div">
    <div v-for="(todo, index) in todos" v-bind:key="todo.id" class="card mb-1">
      <div class="card-body">
        <h5 class="card-title">{{ todo.title }}</h5>
        <p class="card-text">{{ todo.description }}</p>
        <todo-command
          :showUp="index > 0"
          :showDown="index !== todos.length-1"
          @edit="editTodo(todo.id)"
          @del="deleteTodo(todo.id)"
          @up="moveUp(index)"
          @down="moveDown(index)"
        />
      </div>
    </div>
    </transition-group>
  </div>
</template>
<script>
import Command from '../components/Command'
export default {
  name: 'Todo',

  data () {
    return {
      todos: [
        { id: 1, title: 'ใช้ Bootstrap เป็น Theme', description: 'ติดตั้ง Bootstrap CSS ได้จากตัวอย่างที่เคยทำให้ดูในห้องเรียน' },
        { id: 2, title: 'Todo แต่ะละอันจะต้องแก้ไข และลบออกได้', description: 'เมื่อกดปุ่มแก้ไขจะต้องแสดงฟอร์มสำหรับให้แก้ไข และซ่อนรายการ Todo ทั้งหมดไปก่อน' },
        { id: 3, title: 'มีปุ่ม Up และ Down สำหรับเลื่อน Todo ขึ้น หรือ ลง', description: 'ถ้า Todo นั้นอยู่ล่างสุดจะไม่สามารถเลื่อนลงได้ และถ้าอยู่บนสุดก็จะไม่สามารถเลื่อนขึ้นอีกได้' },
        { id: 4, title: 'ดูพฤติกรรมของแอปตัวอย่างนี้ให้ดีๆ แล้วพยายามทำเลียนแบบ', description: 'การเปลี่ยนหน้า การกรอก การเคลียร์ข้อมูล ดูให้ดี' },
        { id: 5, title: 'ทุกอย่างในแอปนี้ใช้ความรู้เท่าที่ได้สอน Vue.js ไปในครั้งแรกเท่านั้น ก็สามารถทำได้ครบ', description: 'ไม่จำเป็นต้องใช้ความรู้อื่นเกี่ยวกับ Vue.js ที่ยังไม่ได้สอน แต่หากต้องการศึกษาเพิ่มแล้วลองใช้ดูก็ไม่เป็นไร' },
        { id: 6, title: 'จุดประสงค์ของการบ้านชิ้นนี้', description: 'ฝึก Vue.js / ฝึก logic การเขียนโปแกรม / ฝึกหาความรู้ด้วยตนเอง / ฝึกใช้ Bootstrap' }
      ]
    }
  },

  methods: {
    moveUp (index) {
      if (index === 0) { return }
      const todo = this.todos[index]
      this.todos.splice(index, 1)
      this.todos.splice(index - 1, 0, todo)
    },

    moveDown (index) {
      if (index === this.todos.length - 1) { return }
      const todo = this.todos[index]
      this.todos.splice(index, 1)
      this.todos.splice(index + 1, 0, todo)
    },

    editTodo (index) {
      this.$router.push({ name: 'edit', params: { id: index } })
    },

    deleteTodo (index) {
      this.todos.splice(index, 1)
    }
  },
  components: {
    TodoCommand: Command
  }
}
</script>
<style>
  @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
</style>
