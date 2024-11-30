import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="click-counter-bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="count-element">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onIncreament}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
