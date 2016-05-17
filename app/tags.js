require('./tags.css')

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
      }
    ]
  },

  methods: {
    clickTag: function (tag) {
      tag.selected = true;
    },

    clickRemove: function (tag) {
      tag.selected = false;
    }
  },

  computed: {
    selectedTags: function () {
      return this.tags.filter(function (tag) {
        return tag.selected === true
      })
    }
  }
})

