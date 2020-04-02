import React, {Component} from 'react';
import './App.css';
import ClockTemplate from './ClockTemplate';
import DigitalClock from './DigitalClock';

const date = new Date();

const days = ['MON','TUE','WED','THU','FRI','SAT','SUN']

class App extends Component {
  
  state = {
    time: new Date()
  }

  tick = () => {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  render(){
    const {time} = this.state;
    
    return(
      <div className = "app">
        <ClockTemplate digitalClock = {<DigitalClock time = {time}
                                                    days = {days}
        />} >

        </ClockTemplate>
        <div>
        </div>
      </div>
    )
  }
}

export default App;
