require("select2/dist/css/select2.css")
require("./select2-demo.scss")

var $ = require("jquery")
require("select2")


$("#foo").select2({
  placeholder: "Placeholder",
  //allowClear: true,

})

const data = [
  {
    id: '',
    text: '',
  },
  {
    id: 0,
    text: 'enhancement'
  },
  {
    id: 1,
    text: 'bug'
  },
  {
    id: 2,
    text: 'duplicate'
  },
  {
    id: 3,
    text: 'invalid'
  },
  {
    id: 4,
    text: 'wontfix'
  },
]

$("#array-data").select2({
  placeholder: "Array data",
  data: data,
})

$("#multiple").select2({
})
