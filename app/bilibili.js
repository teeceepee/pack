let React = require('react')
let ReactDOM = require('react-dom')
let Redux = require('redux')
let thunkMiddleware = require('redux-thunk').default
let loggerMiddleware = require('redux-logger').default
let ReactRedux = require('react-redux')

let Component = React.Component
let Provider = ReactRedux.Provider

let ROLL = "ROLL"
let START = "START"
let STOP = "STOP"

function roll(icon) {
  return {
    type: ROLL,
    icon: icon,
  }
}

function start() {
  return {
    type: START,
  }
}

function stop() {
  return {
    type: STOP,
  }
}

function fetchRandom() {
  return (dispatch) => {
    dispatch(start())

    setTimeout(() => {
      fetch("/data/index-icon.json").then((resp) => resp.json()).then(function (json) {
        let len = json.fix.length
        let i = Math.floor(Math.random() * len)
        let icon = json.fix[i]

        dispatch(roll(icon))
        dispatch(stop())
      })
    }, 1000)
  }
}

let initialState = {
  isFetching: false,
  icon: null,
}

function isFetching(state = initialState.isFetching, action) {
  switch (action.type) {
    case START:
      return true
    case STOP:
      return false
    default:
      return state
  }
}

function icon(state = initialState.icon, action) {
  switch (action.type) {
    case ROLL:
      return action.icon
    default:
      return state
  }
}

let rootReducer = Redux.combineReducers({
  isFetching,
  icon
})

let store = Redux.createStore(
  rootReducer,
  Redux.applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

class Roll extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRandom())
  }

  renderIcon() {
    if (this.props.isFetching) {
      return (
        <div>
          Fetching
        </div>
      )
    } else {
      if (this.props.icon) {
        let icon = this.props.icon
        return (
          <div>
            <p>{icon.title}</p>
            <a href={icon.links[0]} title={icon.title} target="_blank">
              <img src={icon.icon}/>
            </a>
          </div>
        )
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderIcon()}

        <button onClick={() => { this.props.dispatch(fetchRandom()) }}>
          Roll
        </button>
      </div>
    )
  }
}

let ConnectedRoll = ReactRedux.connect((state) => state)(Roll)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoll />
  </Provider>,
  document.getElementById("root")
)

