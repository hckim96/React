import React, {Component} from 'react';
import './Form.css';

class Form extends Component{

    
    render(){
        const {color,value, onChange, onCreate, onClick, onKeyPress} = this.props;
        
        return(
            <div className = "form"  >
                <input style ={{color : color}}
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