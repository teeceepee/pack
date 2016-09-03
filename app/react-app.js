//require("expose?React!react")
var React = require('react')
var ReactDOM = require('react-dom')

console.log(React);


var SyncInput = React.createClass({
  displayName: 'SyncInput',

  getInitialState: function () {
    return {
      value: 'default'
    }
  },

  handleChange: function (e) {
    this.setState({
      value: e.target.value
    })
  },

  render: function () {
    return (
      React.createElement(
        'div',
        null,
        React.createElement(
          'input',
          {
            type: 'text',
            value: this.state.value,
            onChange: this.handleChange,
          }),
        React.createElement(
          'div',
          null,
          React.createElement(
            'code',
            null,
            this.state.value
          )
        )
      )
    )
  }
})

ReactDOM.render(
  React.createElement(SyncInput),
  document.getElementById('root')
)

