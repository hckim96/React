import React, {Component} from 'react';
import TodoListTemplate from './TodoListTemplate';
import TodoItemList from './TodoItemList';
import Form from './Form';
import Palette from './Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6','chartreuse','blueviolet','cadetblue', 'burlywood','blanchedalmond'];

class App extends Component {
  id = 4;

  state = {
    input : '',
    color : '#343a40',
    todos : [
      {id: 0, text: "abcd true", checked: true, color: 'black'},
      {id: 1, text: "qwer false", checked: false, color: 'black'},
      {id: 2, text: "zxcv false", checked: false, color: 'black'},
      {id: 3, text: "bnmg true", checked: true, color: 'black'}
    ]
  }
  
  render(){
    const {input, todos,color} = this.state;
    return (
      <div>
        <TodoListTemplate form = {<Form
                                    color = {color}
                                    value = {input}
                                    onChange = {this.handleChange}
                                    onKeyPress = {this.handleKeyPress}
                                    onCreate = {this.handleCreate}
                                    onClick = {this.handleCreate}/>}
                            palette = {<Palette 
                              colors = {colors}
                              selected = {color}
                              onSelect = {this.handleColor}
                            />}>
          
          <TodoItemList todos = {todos}
                        onToggle = {this.handleToggle}
                        onRemove = {this.handleRemove}
                        >
          </TodoItemList>
          
        </TodoListTemplate>
          
      </div>
    );
  }

  handleColor = (color) => {
    this.setState({
      color : color
    })
  }
  handleCreate = () => {
    const {input,todos,color} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({id: this.id++, text: input, checked: false, color: color})
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
}

export default App;
