import React, {Component} from 'react';
import './App.css';
import CalculatorTemplate from './CalculatorTemplate';
import Form from './Form';
import Keypad from './Keypad';

const keys = ['1','2','3','4','5','6','7','8','9','0']
class App extends Component {

  state = {
    input : ''
  }
  render(){
    return(
      <div> 
        <CalculatorTemplate form = {<Form></Form>}
        keypad = {<Keypad keys = {keys}
                          />}>
          
        </CalculatorTemplate>
      </div>
    )
  }
}

export default App;
