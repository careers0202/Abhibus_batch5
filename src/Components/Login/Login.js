import axios from 'axios';
import React, { Component } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
// import authService from '../authService';
import './login.scss'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            formValues: {},
            msg: ''
        }
    }

    handleInputChange = (e) => {
        const { formValues } = this.state;
        this.setState({
            formValues: { ...formValues, [e.target.name]: e.target.value }
        })


    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { formValues } = this.state;

        axios.post('http://localhost:8081/login', {
            username: formValues.username,
            password: formValues.password
        }).then((response) => {
            console.log({ response });
            if (response.status === 200) {
                const { data } = response

                const cookies = new Cookies();
                cookies.set('authtoken', data.token, { path: '/' });

                localStorage.setItem('localToken', data.token)
                sessionStorage.setItem('sessionToken', data.token)

                localStorage.setItem('userInfo', JSON.stringify(formValues))

                this.props.history.push('/')
            } else {
                this.setState({
                    msg: response.data
                })
            }


        })

        // const response = await axios.post('http://127.0.0.1:8081/login', {
        //     formValues
        // })
        // console.log(response)


    }


    render() {
        const { msg } = this.state;
        return (
            <>
                {msg ?
                    <ToastContainer position="top-end" className="p-3">
                        <Toast bg="danger">
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Error!</strong>
                            </Toast.Header>
                            <Toast.Body>{msg}</Toast.Body>
                        </Toast>
                    </ToastContainer> : ''}
                <div className="d-flex justify-content-center align-items-center login bg-light text-center">
                    <form className="sec" onSubmit={(e) => this.handleSubmit(e)}>
                        <h5 className="mb-4">Login Form</h5>
                        <div>
                            <input
                                type="text"
                                className="form-control py-2"
                                name="username"
                                placeholder="username"
                                onChange={this.handleInputChange} // No arguments

                                required
                            />
                        </div>
                        <div>
                            <input
                                className="form-control py-2"
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={(event) => this.handleInputChange(event)} // when we want pass arguments

                                required
                            />
                        </div>
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-warning w-100"
                        />
                    </form>

                </div>
            </>
        )
    }
}

export default withRouter(Login);