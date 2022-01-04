import React, { Component } from 'react'

export class Count extends Component {
    render() {

        return (
            <div>
                <h1>{this.props.name}</h1>
                <button type="button" onClick={() => this.props.handle('inc')}>increment</button>
                <button type="button" onClick={() => this.props.handle('dec')}>decerement</button>
            </div>
        )
    }
}

export default Count
