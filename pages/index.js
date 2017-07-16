import { Component } from 'react'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'
const socket = io('localhost:3000')
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
    this._handleMessage = this._handleMessage.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)

  }
  // fetch old messages data from the server
  static async getInitialProps ({ req }) {
    const response = await fetch('http://localhost:3000/messages')
    const messages = await response.json()
    return { messages }
  }

  // connect to WS server and listen event
  componentDidMount () {
    this._handleMessage()
  }

  // close socket connection
  componentWillUnmount () {
    socket.off('message', this.handleMessage)
    socket.close()
  }

  // add messages from server to the state
_handleMessage = () => {
    socket.on('message', message => {
      console.log('Entry handleMessage message = ', message, ' socket = ', socket)
      this.setState(state => ({ messages: state.messages.concat(message) }))
    })
  }

  // send messages to server and add them to the state
  _handleSubmit = event => {
    console.log('Entry handleSubmit ')
    event.preventDefault()
    console.log('this.refs.msgVal.value = ', this.refs.msgVal.value)
    // create message object
    const message = {
      id: (new Date()).getTime(),
      value: this.refs.msgVal.value
    }
    console.log('Entry handleSubmit before emit\'message\' message = ', message , ' socket = ', socket)
    // send object to WS server

    socket.emit('message', message)
    // add it to state and clean current input value
    this.setState(state => ({
      messages: state.messages.concat(message)
    }))
    // reset Form data
    this.refs.msgForm.reset()
  }

  render () {
    return (
      <main>
        <div>
          <ul>
            {this.state.messages.map(message =>
              <li key={message.id}>{message.value}</li>
            )}
          </ul>
          <form ref='msgForm'>
            <input
              ref='msgVal'
              type='text'
              placeholder='Hello world!'
            />
            <button onClick={this._handleSubmit}>Send</button>
          </form>
        </div>
      </main>
    )
  }
}

export default HomePage
