import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    render(){
        const {value, onChange, onKeyPress} = this.props;

        return(
            <div className = "form">
                <input
                    value = {value}
                    onChange = {onChange}
                    onKeyPress = {onKeyPress}
                    />
            </div>

        )
    }
}

export default Form;
