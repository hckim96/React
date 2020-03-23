import React, {Component} from 'react';
import './App.css';
import TodoListTemplate from './TodoListTemplate';
import TodoItemList from './TodoItemList';
import Form from './Form';


class App extends Component {
  id = 3;
  state = {
    input : '',
    todos : [
      {id: 0, text: "abcd true", checked: true},
      {id: 1, text: "qwer false", checked: false},
      {id: 2, text: "zxcv false", checked: false}
    ]
  }

  handleCreate = () => {
    const {input,todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({id: this.id++, text: input, checked: false})
    })
    
    
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    
    nextTodos[index] = {
      ...selected, checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });

  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  render(){
    const {input, todos} = this.state;
    return (
      <div>
        <TodoListTemplate form = {<Form
                                    value = {input}
                                    onChange = {this.handleChange}
                                    onKeyPress = {this.handleKeyPress}
                                    onCreate = {this.handleCreate}
                                    onClick = {this.handleCreate}/>}>
          <TodoItemList todos = {todos}
                        onToggle = {this.handleToggle}
                        onRemove = {this.handleRemove}>
          </TodoItemList>
        </TodoListTemplate>

      </div>
    );
  }
}

export default App;
