//require("expose?React!react")
var React = require('react')
var ReactDOM = require('react-dom')
var Immutable = require('immutable');


class SyncTextarea extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: Immutable.Map({
        value: 'placeholder',
      })
    }
  }

  handleChange(e) {
    this.setState({
      data: this.state.data.set('value', e.target.value)
    })
  }

  render() {
   return (
     <div>
       <textarea
         value={this.state.data.get('value')}
         onChange={this.handleChange.bind(this)}
       >
       </textarea>
       <div
         className="count"
       >{this.state.data.get('value').length}
       </div>
       <pre>
         {this.state.data.get('value')}
       </pre>
     </div>
   )
  }
}

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
      <div>
        <input
          type="text"
          value={this.state.data.get('value')}
          onChange={this.handleChange}
        />
        <div>
          <code>{this.state.data.get('value')}</code>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <SyncInput />,
  document.getElementById('sync-input')
)

ReactDOM.render(
  <SyncTextarea />,
  document.getElementById('sync-textarea')
)
