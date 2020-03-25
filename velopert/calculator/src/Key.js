import React, {Component} from 'react';
import './Key.css';


class Key extends Component {
    render(){
        const {myKey, onClick} = this.props;

        return(
            <div className = "key"
                onClick = {onClick}>
                {myKey}
            </div>
            
        )
    }
}

export default Key;