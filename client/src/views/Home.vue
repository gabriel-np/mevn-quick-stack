<template>
  <div class="home">
    <TodoList msg="My Todo List"/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
