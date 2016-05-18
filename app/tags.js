require('./app.css')
require('./tags.scss')

var Vue = require('vue')

var title = new Vue({
  el: '#title',
  data: {
    title: 'Tags'
  }
})

var tagsContainer = new Vue({
  el: '#tags-container',
  data: {
    a: {
      width: '100%'
    },
    tags: [
      {
        text: 'Backbone',
        selected: false
      },
      {
        text: 'Vue',
        selected: true
      },
      {
        text: 'React',
        selected: false
      },
      {
        text: 'Ember',
        selected: false
      },
      {
        text: 'Riot',
        selected: false
      }
    ]
  },

  methods: {
    clickTag: function (tag) {
      tag.selected = true
    },

    clickRemove: function (tag) {
      tag.selected = false
    }
  },

  computed: {
    selectedTags: function () {
      return this.tags.filter(function (tag) {
        return tag.selected === true
      })
    },

    selectedPercentage: function () {
      var percentage = 100 * this.selectedTags.length / (this.tags.length)
      return {
        width: `${percentage}%`
      }
    }
  }
})

