var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, World!',
    url: 'https://jp.vuejs.org/' ,
    toggle: true,
    lauguages: [
      'JavaScript', 'Ruby', 'Python'
    ]
  },
  methods: {
    clicked(){
      this.message = 'Clicked!'
    }
  }
})