import React, {Component} from 'react';

class Color extends Component{
    render(){
        const {color, active, onClick} = this.props;

        return(
            <div 
            className = "color"
            style = {{
                background: color, padding: "1rem", cursor: "pointer",margin: "1rem"
            }}
            onClick = {onClick}>a</div>
        )
    }
};

class Palette extends Component{
    
    render(){
        const {colors, selected, onSelect} = this.props;

        const colorList = colors.map(
            ({color}) => (
            <Color
                color = {color}
                active = {`${(color === selected)? 'true' : 'false'}`}
                onClick = {onSelect}
                />)
        );

        return(
            <div className = "palette"
                style = {{display: "flex", justifyContent: "center"}}>
                {colorList}
            </div>
        );
    }
}

export default Palette;