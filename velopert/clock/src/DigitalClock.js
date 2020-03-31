import React, {Component} from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {
    render(){
        const {time} = this.props;
        let date = new Date();
        let style = {opacity: 1};

        setInterval(() => {
            style = {opacity: 0 };
        }, 500);
        return(
            <div className = "digitalClock">
                <div className = "year">

                </div>
                <div className = "days">

                </div>
                <div className = "time">
                    <div className = "hour">
                        {date.getHours()}
                    </div>
                    <div className = "colon">
                        :
                    </div>
                    <div className = "minute">
                        {date.getMinutes()}
                    </div>
                    <div className = "colon2" style = {style}>
                        :
                    </div>
                    <div className = "second">
                        {date.getSeconds()}
                    </div>
                </div>
                
            </div>
        )
    }
}



export default DigitalClock;