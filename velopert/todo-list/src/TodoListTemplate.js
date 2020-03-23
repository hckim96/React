import React, {Component} from 'react';
import './TodoListTemplate.css'
class TodoListTemplate extends Component {
    render() {
        const {form, children} = this.props;

        return (
            <div className = "todo-list-template">
                List
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
