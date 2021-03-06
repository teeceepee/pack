require('bootstrap/dist/css/bootstrap.css');
require('./app.css')
require('./search-form.scss')

var Vue = require('vue')

var SearchForm = Vue.extend({
  template: '#search-component',

  props: {
    submit: {
      type: String,
      default: 'Search',
      required: false,
    }
  },

  data: function () {
    return {
      keywords: ''
    }
  },

  methods: {
    search: function (keywords) {
      console.log(keywords)
    }
  },
  computed: {
    keywordArray: function () {
      return this.keywords.trim().split(/\s+/)
    }
  }
})

// global registration
//Vue.component('search-form', SearchForm)

var forms = new Vue({
  el: '#forms',
  components: {
    'search-form': SearchForm
  },
  data: {
    names: [
      'Search',
      'Search it',
      'Go!',
      "I'm Feeling Lucky",
    ]
  }
})
