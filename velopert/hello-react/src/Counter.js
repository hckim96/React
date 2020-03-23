import React, {Component} from 'react';

const Problematic = () => {
    throw(new Error('bug!!!'));
    return(
        <div>

        </div>
    );
};

class Counter extends Component {
    state = {
        number : 0,
        error: false
    }
    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }


    handleIncrease = () => {
        this.setState(
            ({number}) => ({
                number: number + 1
            })
        );
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        if (this.state.error === true) return (<h1>error occurred!!!</h1>)
        return(
            <div>
                <h1>Counter</h1>
                <div>Value: {this.state.number}</div>
                {this.state.number === 4 && <Problematic/> }
                <button onClick = {this.handleIncrease}>+</button>
                <button onClick = {this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;