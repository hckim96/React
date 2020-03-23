import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        list: [1,2],
        onRemove: () => console.warn('onRemove not defined'),
        OnUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.data !== this.props.data;
    }
    render(){
        console.log('phoneInfoList render() executed');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            item => (<PhoneInfo
                 key = {item.id}
                 info = {item}
                 onRemove ={onRemove}
                 onUpdate = {onUpdate}
                 />)
        );
        return(
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
