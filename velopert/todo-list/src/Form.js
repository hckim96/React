import React, {Component} from 'react';
import './Form.css';

class Form extends Component{

    
    render(){
        const {value, onChange, onCreate, onClick, onKeyPress} = this.props;

        return(
            <div className = "form" >
                <input
                    value = {value}
                    onCreate = {onCreate}
                    onChange = {onChange}

                    onKeyPress = {onKeyPress}
                />
                <div className = "add-button"
                    onClick = {onClick}>
                    ADD
                </div>
            </div>
        );
    }
}

export default Form;