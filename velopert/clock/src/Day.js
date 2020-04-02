import React, {Component} from 'react';
import './Day.css';
class Day extends Component {
    render(){
        const {day, active} = this.props;
        
        return(
            <div className = "day">
                {day +''+ active}

            </div>
        )
    }
}

export default Day;
