import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    render() {
        return (
            <form className="formContainer">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <input type="submit" style={{ background: 'green', color: 'red', border: '1px solid red', borderRadius: '10px' }} />
            </form>
        )
    }
}

export default Form;
