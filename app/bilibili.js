let React = require('react')
let ReactDOM = require('react-dom')
let Redux = require('redux')
let thunkMiddleware = require('redux-thunk').default
let ReactRedux = require('react-redux')

let Component = React.Component
let Provider = ReactRedux.Provider

let ROLL = "ROLL"

function roll(icon) {
  return {
    type: ROLL,
    icon: icon,
  }
}

function fetchRandom() {
  return (dispatch) => {
    setTimeout(() => {
      fetch("/data/index-icon.json").then(function (resp) {
        return resp.json()
      }).then(function (json) {
        let len = json.fix.length
        let i = Math.floor(Math.random() * len)
        let icon = json.fix[i]

        dispatch(roll(icon))
      })
    }, 1000)
  }
}

let initialState = {
  icon: null,
}

function icon(state = initialState, action) {
  switch (action.type) {
    case ROLL:
      return {
        icon: action.icon,
      }
    default:
      return state
  }
}

let store = Redux.createStore(
  icon,
  Redux.applyMiddleware(thunkMiddleware)
)

class Roll extends Component {

  componentDidMount() {
    this.props.dispatch(fetchRandom())
  }

  renderIcon() {
    if (this.props.icon) {
      let icon = this.props.icon

      return (
        <div>
          <p>{icon.title}</p>
          <a href={icon.links[0]} title={icon.title} target="_blank">
            <img src={icon.icon} />
          </a>
        </div>
      )
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

