// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log('button clicked')
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            The button has been clicked{' '}
            <span className="span-element">{count}</span> times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <button onClick={this.onIncrement} className="button" type="button">
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
