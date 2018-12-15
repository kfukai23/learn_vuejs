// const axios = require('axios')

var app = new Vue ({
    el: '#app',
    data: {
        coinInfo: []
    },
    mounted(){
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (response){
            this.coinInfo = response.data.bpi
            console.log(this.coinInfo)
        }.bind(this))
        .catch(function (error){
            console.log(error)
        })
    }
})