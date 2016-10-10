var Vue = require('vue/dist/vue')

Vue.use(require('vue-resource'))


new Vue({
  el: '#resource-container',

  data: {
    title: '',
  },

  mounted: function () {
    this.$http({
      url: '/data/foo.json',
      method: 'GET'
    }).then(function (response) {
      this.title = response.data.foo;
    }, function (response) {

    })

  }
})
