var app = new Vue ({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem() {
            if(this.newItem == '') return
            var todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem(index){
            this.todos.splice(index, 1)
        }
    }
})