import React, {Component} from 'react';
import Key from './Key';
import './Keypad.css';

class Keypad extends Component {
    render(){
        const {keys, onClick} = this.props;

        const keyList = keys.map(
            (key) => (<Key myKey = {key}
                            onClick = {onClick}
                            key = {key}/>
            )
        )
        return(
            <div className = "keypad">
                {keyList}
            </div>
        )
    }
}
export default Keypad;
