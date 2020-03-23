import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                placeholder = "Name"
                value = {this.state.name}
                onChange = {this.handleChange}
                name = "name"
                />
                <input
                placeholder = "PhoneNumber"
                value = {this.state.phone}
                onChange = {this.handleChange}
                name = "phone"
                />
                <button type = "submit">Add</button>
                
                
            </form>
        );
    }
}
export default PhoneForm;