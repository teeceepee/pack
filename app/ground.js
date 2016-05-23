require('./ground.scss')

let Vue = require('vue')

let Ground = Vue.extend({
  template: '#ground-tmpl',

  props: {
    rows: {
      type: Number,
      required: true
    },
    columns: {
      type: Number,
      required: true
    }
  }
})

Vue.component('ground', Ground)

let GroundRow = Vue.extend({
  template: '#ground-row-tmpl',

  props: {
    columns: {
      type: Number,
    }
  }
})

Vue.component('ground-row', GroundRow)


let Cell = Vue.extend({
  template: '#cell-tmpl',

  props: {
    isSelected: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    click: function () {
      this.isSelected = !this.isSelected;
    }
  }

})

Vue.component('cell', Cell)


new Vue({
  el: '#ground-wrapper'

})
