var app = new Vue ({
    el: '#app',
    data: {
        form:'',
        todos: []
    },
    methods: {
        addTodo(name) {
            if(name){
                this.todos.push({ name: name, is_done: false }) 
                this.form = ''
            }
        },
        deleteTodo(index){
            this.todos.splice(index, 1)
        }
    }
})