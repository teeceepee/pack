//require("expose?Vue!vue")
var Vue = require('vue')

var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

var MyComponent = Vue.extend({
  template: '#my-component'
})

Vue.component('my-component', MyComponent)

new Vue({
  el: '#example'
})

var form = new Vue({
  el: '#form-container',
  data: {
    name: 'foo'
  },
  methods: {
    click: function () {
      alert(this.name);
    }
  }
})

let clock = new Vue({
  el: '#clock',
  data: {
    now: null,
  },
  created: function () {
    var setNow = function () {
      this.now = new Date().toString()
    }.bind(this)

    setNow()
    setInterval(function () {
      setNow()
    }.bind(this), 1000)
  },
})

let selectForm = new Vue({
  el: "#select-form",
  data: {
    selected: null,
    options: [
      {
        text: null,
        value: null,
      },
      {
        text: "one",
        value: "1",
      },
      {
        text: "two",
        value: "2",
      },
      {
        text: "three",
        value: "3",
      },
      {
        text: "four",
        value: "4",
      },
      {
        text: "five",
        value: "5",
      },
      {
        text: "six",
        value: "6",
      },
    ]
  },
})
