import React, {Component} from 'react';
import './App.css';
import CalculatorTemplate from './CalculatorTemplate';
import Form from './Form';
import Keypad from './Keypad';

const keys = [ <div>&#37;</div>,<div>&radic;</div>,'C', <div>&#8678;</div>, '1','2','3', <div>&divide;</div> ,'4','5','6', <div>&times;</div>,'7','8','9',<div>&minus;</div>,'0','.', <div>&#61;</div>, <div>&#43;</div>]
class App extends Component {

  state = {
    input : '',
    operator: '',
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress = (e) => { // todo isfinite , / -> divide
    if (e.key === 'Enter') {
      this.calculate();
      this.setState((state,props) => ({
        input: state.result
      }));
    }
    
  }

  getPriority = (op) => {
    switch (op) {
      case '*' || '/' :
        return 2;
      case '+' || '-' :
        return 1;
        case '(' :
          return 0;
    }
  }

  calculate = () => {
    const str = this.state.input;
    let postFixNotation = '';
    const arr = str.split(/([^\d{10}$])/g);

    let stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (Number.isFinite(Number(arr[i]))) {
        postFixNotation = postFixNotation + arr[i];
      } else {
        while (stack.length !==0) {
          if (this.getPriority(stack.lastItem) >= this.getPriority(arr[i])) {
            
          }
        }
         this.getPriority(stack.lastItem) >= this.getPriority(arr[i])){
          postFixNotation = postFixNotation + stack.pop();
        }
        stack.push(arr[i]);
      }
    }
    while(stack.length !== 0) {
      postFixNotation = postFixNotation + stack.pop();
    }

    alert(postFixNotation);

    
  }

  handleClick = (key) => {
    if (Number.isFinite(Number(key))) {
      this.setState({
        input: this.state.input + key
      });
    } else if (key === 'C') {
      this.setState({
        input: '',
        operator: '',
        fisrtOperand : 0,
        secondOperand: 0,
        noOperand: true
      })
    } else if ( key.props.children === "=") {
      this.calculate();
      this.setState((state,props) => ({
        input: state.result
      }));
    } else {
      this.setState({
        input: this.state.input + key.props.children
      });
    }
    //   √
    // %
    // +
    // −÷
    // ×
    
  }

  render(){
    const {input} = this.state;
    const {handleChange, handleKeyPress, handleClick} = this;

    return(
      <div> 
        <CalculatorTemplate form = {<Form onChange = {handleChange}
                                          onKeyPress = {handleKeyPress}
                                          value = {input}></Form>}
        keypad = {<Keypad keys = {keys}
                          onClick = {handleClick}/>}>
          
        </CalculatorTemplate>
      </div>
    )
  }
}

export default App;
