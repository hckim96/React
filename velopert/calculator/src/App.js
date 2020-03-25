import React, {Component} from 'react';
import './App.css';
import CalculatorTemplate from './CalculatorTemplate';
import Form from './Form';
import Keypad from './Keypad';

const keys = ['1','2','3','+','4','5','6', '-','7','8','9','X','.','0',' ','=']
class App extends Component {

  state = {
    input : '123'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'enter') {
      this.setState({
        input: ''
      });
    }
  }

  render(){
    const {input} = this.state;
    const {handleChange, handleKeyPress} = this;

    return(
      <div> 
        <CalculatorTemplate form = {<Form onChange = {handleChange}
                                          onKeyPress = {handleKeyPress}
                                          value = {input}></Form>}
        keypad = {<Keypad keys = {keys}
                          />}>
          
        </CalculatorTemplate>
      </div>
    )
  }
}

export default App;
