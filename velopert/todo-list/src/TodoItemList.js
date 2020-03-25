import React, {Component} from 'react';
import TodoItem from './TodoItem';

import './TodoItemList.css';

class TodoItemList extends Component {

    render(){
        const { onToggle, onRemove, todos} = this.props;
        
        const todoList = todos.map(
            ({id,text,checked,color}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    key = {id}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    color = {color}
                />
            )
        )
        return(
            <div>
                {todoList}
            </div>
        )
    }
}
export default TodoItemList;
