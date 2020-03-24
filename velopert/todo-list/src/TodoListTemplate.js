import React, {Component} from 'react';
import './TodoListTemplate.css'
import Palette from './Palette';

class TodoListTemplate extends Component {
    render() {
        const {form, palette, children} = this.props;

        return (
            <div className = "todo-list-template">
                <div className="title">Todo-List </div>
                <div className = "palette">{palette}</div>
                <div className = "form-wrapper">
                    {form}
                </div>
                <div className  = "todos-wrapper">
                    {children}
                </div>

            </div>
        );
    }
}

export default TodoListTemplate;
