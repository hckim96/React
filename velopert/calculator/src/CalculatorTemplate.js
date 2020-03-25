import React, {Component} from 'react';
import './CalculatorTemplate.css';

class CalculatorTemplate extends Component {

    render(){
        const {form, keypad} = this.props;

        return(
            <div className = "calculator-template">
                <div>
                    {form}
                </div>
                <div>
                    {keypad}
                </div>
            </div>
        )
    }
}

export default CalculatorTemplate;
