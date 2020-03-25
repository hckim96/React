import React, {Component} from 'react';
import './Palette.css';
import TodoItem from './TodoItem';

class Color extends Component{
    render(){
        const {color, active, onClick} = this.props;

        return(
            <div className = "main">
            <div 
            style = {{background: color}}
            className = {`color ${active && 'active'}`}
            onClick = {onClick}></div>
            </div>
        )
    }
};

class Palette extends Component{
    
    render(){
        const {colors, selected, onSelect} = this.props;

        const colorList = colors.map(
            (color) => (
            <Color
                color = {color}
                active = {color === selected}
                onClick = {() => onSelect(color)}
                key = {color}
                />)
        );

        return(
            <div className = "palette">
                {colorList}
            </div>
        );
    }
}

export default Palette;