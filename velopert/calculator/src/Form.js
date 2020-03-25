import React, {Component} from 'react';

class Form extends Component{
    render(){
        const {value, onChange} = this.props;
        
        return(
            <div className = "Form">
                <input
                    value = {value}
                    onChange = {onChange}
                    />


            </div>

        )
    }
}

export default Form;
