import React, { Component } from 'react';


class Output extends Component {
    render() {
        console.log(this.props);
        const { value, name } = this.props;
        return (
            <>
                <h1>Output componet</h1>
                <h5>Result count:{value}</h5>
                <p>{name}</p>
            </>
        )
    }
}

export default Output;