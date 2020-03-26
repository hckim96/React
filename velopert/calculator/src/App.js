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
    fisrtOperand: 0,
    secondOperand: 0,
    result: 0,
    noOperand: true,
    
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

  calculate = () => {
    let str = this.state.input;
    const arr = str.split(/[^\d{10}$]/);
    let i = 0;
    while (str.search(/[^\d{10}$]/) !== -1) {
      switch(str[str.search(/[^\d{10}$]/)]) {
        case '+':
          if (i === 0) {
            this.setState({
              result: Number(arr[i]) + Number(arr[i+1])

            }, ()=> {});

          } else {
            alert(this.state.result);
            this.setState(state => ({
              result: state.result + Number(arr[i+1])
            }))
          }
          i++;
          break;
      }
      str = str.slice(str.search(/[^\d{10}$]/) + 1, str.length)
    }
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
