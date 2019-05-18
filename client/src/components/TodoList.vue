<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>{{ msg }}</h2>
          <form v-on:submit.prevent="addNewTask">
            <div class="row">
              <div class="col">
                <div class="input-group">
                  <input type="text" v-model="taskname" id="tasknameinput" class="form-control" placeholder="Add New Task" aria-describedby="button-addon1">
                  <div class="input-group-append">
                    <button type="button" id="button-addon1" class="btn btn-outline-secondary" v-on:click="clearInput()">Clear</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button v-if="!isEdit" type="submit" class="btn btn-success btn-block mt-3">
                Submit
                </button>
                <button v-else v-on:click="updateTask()" type="button" class="btn btn-primary btn-block mt-3">
                Update
                </button>
              </div>
            </div>
          </form>
          <table class="table">
            <tr>
              <th>{{todos.length}} Things to do</th>
            </tr>
            <tr v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.task_name" >
              <td class="text-left">{{todo.task_name}}</td>
              <td class="text-right">
                <button class="btn btn-text" v-on:click="editTask(todo.task_name, todo.id)">
                Edit
                </button>
                &nbsp;
                <button class="btn btn-danger" v-on:click="deleteTask(todo.id)">
                Delete
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  mounted () {
   this.getTasks()
  },
  data: () => ({
    todos: [],
    id: '',
    taskname: '',
    isEdit: false
  }),
  methods: {
    getTasks() {
        this.axios.get("/api/tasks").then(
           result => {
              this.todos = result.data
              this.sortDynamicDropDownMenu()
           },
           error => {
              console.error(error)
           }
        )
     },
     addNewTask() {
         this.axios.post("/api/task", {task_name: this.taskname})
         .then((res) => {
             this.taskname = ''
             this.getTasks()
         }).catch((err) => {
             console.log(error)
         })
     },
     editTask(title, id) {
        this.id = id
        this.taskname = title
        this.isEdit = true
     },
     updateTask() {
        this.axios.put(`/api/task/${this.id}`, {task_name: this.taskname})
        .then((res) => {
           this.taskname = ''
           this.isEdit = false
           this.getTasks()
        })
        .catch((err) => {
          console.log(err)
        })
      },
      deleteTask(id) {
         this.axios.delete(`/api/task/${id}`)
            .then((res) => {
            this.taskname = ''
            this.getTasks()
            })
            .catch((err) => {
                console.log(err)
            })
      },
      clearInput() {
        this.taskname = ''
        this.isEdit = false
      }
    }
}
</script>

<style scoped lang="scss">
  #todo-list-example, form, table {margin-top: 1rem}
</style>
