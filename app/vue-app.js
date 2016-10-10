require('purecss/build/base-context.css')
require('purecss/build/forms.css')
require('purecss/build/buttons.css')

//require("expose?Vue!vue")
var Vue = require('vue/dist/vue')

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

let locationForm = new Vue({
  el: "#location-form",
  data: {
    selectedLocation: null,
    locationOptions: [
      {
        text: "Beijing",
        value: "beijing",
      },
      {
        text: "Shanghai",
        value: "shanghai",
      },
      {
        text: "Other",
        value: "other",
      }
    ],
    otherLocation: null,
  },
  methods: {
    showOther: function () {
      return this.selectedLocation === 'other'
    },
    currentLocation: function () {
      return this.showOther() ? this.otherLocation : this.selectedLocation
    },
    clickLabel: function (label) {
      console.log(label);
    }
  }
})
