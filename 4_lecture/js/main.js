// const axios = require('axios')

var app = new Vue ({
    el: '#app',
    data: {
        bpi: null,
        hasError: false
    },
    mounted(){
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (response){
            this.bpi = response.data.bpi
            console.log(this.bpi)
        }.bind(this))
        .catch(function (error){
            console.log(error)
            this.hasError = true
        }.bind(this))
      },
    filters: {
        currencyDecimal(value) {
            return value.toFixed(2)
        }
    }
})