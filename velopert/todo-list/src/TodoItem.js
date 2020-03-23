import React, {Component} from 'react';
import './TodoItem.css';
class TodoItem extends Component {

    render(){
        const {id, text, checked,onToggle, onRemove} = this.props;

        console.log('render');
        return(
            
            <div className = "todo-item" onClick = {()=>onToggle(id)}>
                <div className = "delete-mark" onClick = {(e) => {e.stopPropagation(); onRemove(id);}}
                    >
                    &times;
                </div>
                <div className = {`text${checked ? '-checked' : ''}`}>
                    {text}
                </div>
                <div>
                    {checked && <div className = "check-mark"> &#10003;</div>}
                </div>
                
            </div>
        )
    }
}

export default TodoItem;