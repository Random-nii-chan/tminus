import {Component} from 'react'
import CountdownTimer from './CountdownTimer'

export default class App extends Component {
  constructor(props) {
    super(props)
    let interval = setInterval(this.timer,1000)
    this.state = {
      targetDate:new Date(2021,10,9).toString(),
      currentDate:new Date().toString(),
      intervalTracker: interval
    }
  }

  timer = () => {
    this.setState({currentDate:new Date().toString()})
  }

  incrementDebug = () => {
    let date = new Date(this.state.targetDate)
    date.setFullYear(date.getFullYear()+1)
    this.setState({targetDate:date.toString()})
  }

  render() {
    return <div>
      <h1>Current date = {this.state.currentDate}</h1>
      <CountdownTimer target={this.state.targetDate}/>
      <button onClick={this.incrementDebug}>Test</button>
    </div>
  }
}
