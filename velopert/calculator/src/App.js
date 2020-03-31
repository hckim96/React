import React, {Component} from 'react';
import './App.css';
import CalculatorTemplate from './CalculatorTemplate';
import Form from './Form';
import Keypad from './Keypad';

const keys = [ '','','','( )',<div>&#37;</div>,<div>&radic;</div>,'C', <div>&#8678;</div>, '1','2','3', <div>&divide;</div> ,'4','5','6', <div>&times;</div>,'7','8','9',<div>&minus;</div>,'0','.', <div>&#61;</div>, <div>&#43;</div>]
class App extends Component {

  state = {
    input : '',
    operator: '',
    result: 0
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
    if(['√'].includes(op)) {
      return 4;
    } else if (['%'].includes(op)) {
      return 5;
    } else if (['*', '/', '×', '÷'].includes(op)) {
      return 2;
    } else if (['+', '-'].includes(op)) {
      return 1;
    } else if (['('].includes(op)) {
      return 0;
    } else {
      return -1;
    }
  }

  calculate = () => {
    const str = this.state.input;
    let postFixNotation = [];

  let arr = str.replace(" ", "").split(/([^0-9.])/g);
  while (arr.indexOf("") !== -1) {
    let idx = arr.indexOf("");
    arr.splice(idx, 1);
  }
  console.log(arr);
  

    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      if (Number.isFinite(Number(arr[i]))) {
        postFixNotation.push(arr[i]);
      } else if (arr[i] === '(') {
        stack.push(arr[i]);
      } else if (arr[i] === ')') {
        while (stack[stack.length - 1] !== '(') {
          postFixNotation.push(stack.pop());
        }
        stack.pop();
      } else { // operator
          while (stack.length !== 0 && this.getPriority(stack[stack.length - 1]) >= this.getPriority(arr[i])) {
            postFixNotation.push(stack.pop());
          }
          stack.push(arr[i]);
      }
    }
    
    while(stack.length !== 0){
      postFixNotation.push(stack.pop());
    }

    let stack2 = [];
    let res;
    for (let j = 0; j < postFixNotation.length; j++) {
      if (postFixNotation[j] === '+') {
        res = Number(stack2.pop()) + Number(stack2.pop());
        stack2.push(res);
      } else if (postFixNotation[j] === '-') {
        res = -Number(stack2.pop()) + Number(stack2.pop());
        stack2.push(res);
      } else if (['*','×'].includes(postFixNotation[j])) {
        res = Number(stack2.pop()) * Number(stack2.pop());
        stack2.push(res);
      } else if (['/','÷'].includes(postFixNotation[j])) {
        let operand2, operand1;
        operand2 = Number(stack2.pop());
        operand1 = Number(stack2.pop());
        res = operand1 / operand2;
        stack2.push(res);
      } else if (postFixNotation[j] === '√') {
        res = Math.sqrt(stack2.pop());
        stack2.push(res);
      } else if (postFixNotation[j] === '%') {
        res = stack2.pop()*0.01;
        stack2.push(res);

      } else {
        stack2.push(postFixNotation[j]);
      }
    }

    this.setState({
      result : stack2.pop()
    })
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
      })
    } else if (key === '( )') {
      const str = this.state.input;
      let parenthese = '';
      if (str === '') {
        parenthese = '(';
      } else if ((str.match(/\(/g) || []).length > (str.match(/\)/g) || []).length) {
        parenthese = ')';
      } else {
        parenthese = '(';
      }
      this.setState({
        input: this.state.input + parenthese
      })
      
    } else if (key.props.children === "=") {
      this.calculate();
      this.setState((state,props) => ({
        input: state.result
      }));
    } else if (key.props.children === '⇦') {
      this.setState({
        input: this.state.input.slice(0,-1)
      })
    }
    else {
      this.setState({
        input: this.state.input + key.props.children
      });
    }
    //   √
    // %
    // +
    // −÷×%√
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
