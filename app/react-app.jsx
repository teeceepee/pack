//require("expose?React!react")
let React = require('react')
let ReactDOM = require('react-dom')
let Immutable = require('immutable')
let Redux = require('redux')
let ReactRedux = require('react-redux')
let Component = React.Component
let PropTypes = React.PropTypes
let Provider = ReactRedux.Provider

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
      items: Immutable.List(),
    }
  }

  handleClickTab(key) {
    this.setState(Object.assign(this.state, {active: key}))
  }

  handleClickOption(option) {
    if (!this.state.items.includes(option)) {
      this.setState(Object.assign(this.state, {
        items: this.state.items.push(option)
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


let initalState = {
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
  items: Immutable.List(),
}

// Actions
const SHOW_TAB = 'SHOW_TAB'
const ADD_ITEM = 'ADD_ITEM'

let showTab = function (index) {
  return {type: SHOW_TAB, index}
}

let addItem = function (item) {
  return {type: ADD_ITEM, item}
}

// Reducers
let active = function (state = initalState.active, action) {
  switch (action.type) {
    case SHOW_TAB:
      return action.index
    default:
      return state
  }
}

let options = function (state = initalState.options, action) {
  return state
}

let items = function (state = initalState.items, action) {
  switch (action.type) {
    case ADD_ITEM:
      let newState = state.includes(action.item) ? state : state.push(action.item)
      return newState
    default:
      return state
  }
}

let navTabsReducer = Redux.combineReducers({
  active,
  options,
  items,
})

let navTabsStore = Redux.createStore(navTabsReducer)

class NavTabs extends React.Component {
  constructor(props) {
    super(props)

  }

  tabs(options, active) {
    let tabs = options.entrySeq().map(([k, v]) => {
      let classes = active === k ? 'tab active' : 'tab'
      return (
        <div
          className={classes}
          key={k}
          onClick={() => { this.props.dispatch(showTab(k)) }}
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

  selectable(options, active) {
    let active_options = (options.get(active) || []).map((option, i) => {
      return (
        <li
          key={i}
          onClick={() => { this.props.dispatch(addItem(option)) }}
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

  item_list(items) {
    let lis = items.map((item, i) => {
      return (
        <li key={i}>
          {item}
        </li>
      )
    })
    return (
      <ul>
        {lis}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.tabs(this.props.options, this.props.active)}
        {this.selectable(this.props.options, this.props.active)}
        {this.item_list(this.props.items)}
      </div>
    )
  }
}

let select = function (state) {
  return state
}

var ConnectedNavTabs = ReactRedux.connect(select)(NavTabs)

ReactDOM.render(
  <Provider store={navTabsStore}>
    <ConnectedNavTabs />
  </Provider>,
  document.getElementById('nav-tabs')
)
