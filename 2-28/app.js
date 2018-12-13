/* 変数名はappかvm(vue model)が慣習として使われる */
var app = new Vue({
  // options
  el: '#app',
  data: {
	  message: 'Hello, Vue.js!'
  },
  methods :{
  	onclick: function(){
    	alert('onclick')
      this.now = new Date().toLocaleString()
    }
  }
})