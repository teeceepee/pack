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

const dynamicData = {
  "": [
    ""
  ],
  "Ruby": [
    "Rails",
    "Sinatra",
    "Grape",
  ],
  "JavaScript": [
    "React",
    "Vue",
  ]
}

$("#language").select2({
  data: Object.keys(dynamicData),
  minimumResultsForSearch: Infinity,
}).on("change", function (e) {
  var current = $(e.target).val()
  var el = $("#framework")

  // Select2 的 data 选项是插入新的 option 元素,
  // 通过先清空 option 再插入实现重新设置选项
  if (el.data("select2")) {
    el.empty()
  }

  el.select2({
    data: dynamicData[current],
    minimumResultsForSearch: Infinity,
  })

}).trigger("change")
