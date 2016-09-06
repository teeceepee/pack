//require("expose?React!react")
var React = require('react')
var ReactDOM = require('react-dom')
var Immutable = require('immutable');

require('./react-app.scss')


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

class Foo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: null,
      options: Immutable.Map({
        developer: [
          'JavaScript',
          'Ruby',
          'Rust',
        ],
        designer: [
          'UI',
          'UX',
        ]
      }),
      items: [],
    }
  }

  handleClickTab(key) {
    this.setState(Object.assign(this.state, {active: key}))
  }

  handleClickOption(option) {
    let items = this.state.items;
    if (items.indexOf(option) < 0) {
      items.push(option);
      this.setState(Object.assign(this.state, {
        items: items
      }))
    }
  }

  tabs() {
    let tabs = this.state.options.entrySeq().map(([k, v]) => {
      let classes = this.state.active === k ? 'tab active' : 'tab'
      return (
        <div
          className={classes}
          key={k}
          onClick={() => { this.handleClickTab(k) }}
        >
          {k}
        </div>
      )
    })

    return (
      <div
        className="tabs"
      >
        {tabs}
      </div>
    )
  }

  selectable() {
    let active_options = (this.state.options.get(this.state.active) || []).map((option, i) => {
      return (
        <li
          key={i}
          onClick={() => { this.handleClickOption(option) }}
        >
          {option}
        </li>
      )
    })
    return (
      <ul>
        {active_options}
      </ul>
    )
  }

  item_list() {
    let items = this.state.items.map((item, i) => {
      return (
        <li key={i}>
          {item}
        </li>
      )
    })
    return (
      <ul>
        {items}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.tabs()}
        {this.selectable()}
        {this.item_list()}
      </div>
    )
  }

}

ReactDOM.render(
  <Foo />,
  document.getElementById('foo')
)
