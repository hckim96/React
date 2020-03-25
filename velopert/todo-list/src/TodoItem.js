import React, {Component} from 'react';
import './TodoItem.css';
class TodoItem extends Component {

    render(){
        const {color,id, text, checked,onToggle, onRemove} = this.props;

        console.log('render');
        return(
            
            <div className = "todo-item" onClick = {()=>onToggle(id)}>
                <div className = "delete-mark" onClick = {(e) => {e.stopPropagation(); onRemove(id);}}
                    >
                    &times;
                </div>
                <div className = {`text${checked ? '-checked' : ''}`}>
                    <div style = {{color: color}}>{text}</div>
                </div>
                    {checked && <div className = "check-mark">&#x2713;</div>}
                
            </div>
        );
    }
}

export default TodoItem;