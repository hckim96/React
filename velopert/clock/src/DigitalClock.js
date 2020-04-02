import React, {Component} from 'react';
import './DigitalClock.css';
import Day from './Day';

class DigitalClock extends Component {
    addZero = (date) => {
        let str = "";
        if (String(date.getHours()).length === 1) {
            str = str +'0' + date.getHours();
        } else {
            str = str + date.getHours();
        }
        str = str + ':';
        if (String(date.getMinutes()).length === 1) {
            str = str +'0' + date.getMinutes();
        } else {
            str = str + date.getMinutes();
        }
        str = str + ':';
        if (String(date.getSeconds()).length === 1) {
            str =  str +'0' + date.getSeconds();
        } else {
            str = str + date.getSeconds();
        }
        
        return str;
    }
    
    render(){
        const {time, months, days} = this.props;
        let date = new Date();
        let arr = this.addZero(date).split(/(:)/g);
        const dayList = days.map(
            (d) => <Day day = {d}
                        active = { days.indexOf(d) === date.getDay() ? 1 : 0 }
                        />

        );
        
        
        return(
            
            <div className = "digital-clock">
                <div className = "year">
                    {date.getFullYear() +'년'+ (String(date.getMonth() + 1).length === 1 ? '0' + (date.getMonth()+1) : date.getMonth()+ 1)+ '월'  + date.getDate() + '일'}
                </div>
                <div className = "days">
                    {dayList}
                </div>
                <div className = "time">
                    <div className = "hour">
                        {arr[0]}
                    </div>
                    <div className = "colon" id = 'a' style = {{opacity : 1}}>
                        {arr[1]}
                    </div>
                    <div className = "minute">
                        {arr[2]}
                    </div>
                    <div className = "colon-2" id = 'b' style = {{opacity: 1}}>
                        {arr[3]}
                    </div>
                    <div className = "second">
                        {arr[4]}
                    </div>
                </div>
                
            </div>
        )
    }
}
setInterval(() => {
    console.log(document.getElementById('a').style.opacity)
    if (document.getElementById('a').style.opacity === '1') {
        document.getElementById('a').style.opacity =  '0';
    } else if (document.getElementById('a').style.opacity === '0') {
        document.getElementById('a').style.opacity = '1';
    }
    if (document.getElementById('b').style.opacity === '1') {
        document.getElementById('b').style.opacity =  '0';
    } else if (document.getElementById('b').style.opacity === '0') {
        document.getElementById('b').style.opacity = '1';
    }
  }, 500);


export default DigitalClock;