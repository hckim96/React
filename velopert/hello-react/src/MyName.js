import React, {Component} from 'react';


const MyName = ({name}) => {
    return (
        <div>
            Hello ! my name is {name} .
        </div>
    );
};

MyName.defaultProps = {
    name: 'defaultName'
};
export default MyName;