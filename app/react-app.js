//require("expose?React!react")
var React = require('react')
var ReactDOM = require('react-dom')
var Immutable = require('immutable');


var SyncInput = React.createClass({
  displayName: 'SyncInput',

  getInitialState: function () {
    return {
      data: Immutable.Map({
        value: 'placeholder',
      })
    }
  },

  handleChange: function (e) {
    this.setState({
      data: this.state.data.set('value', e.target.value)
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
            value: this.state.data.get('value'),
            onChange: this.handleChange,
          }),
        React.createElement(
          'div',
          null,
          React.createElement(
            'code',
            null,
            this.state.data.get('value')
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

