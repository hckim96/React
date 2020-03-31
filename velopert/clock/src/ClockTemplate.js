import React, {Component} from 'react';
import './ClockTemplate.css';


class ClockTemplate extends Component {
    
    render(){
        const {date, digitalClock, analogClock} = this.props;

        return(
            <div className = "clock-template">
                <div className = "digital-clock">
                    {digitalClock}
                </div>
                <div className = "analog-clock">
                    {analogClock}
                </div>
            </div>
        )
    }
}


export default ClockTemplate;
