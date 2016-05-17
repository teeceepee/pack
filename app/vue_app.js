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
