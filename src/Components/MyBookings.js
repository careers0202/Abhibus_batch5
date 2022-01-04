import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import authService from '../authService';


export default class MyBookings extends Component {
    constructor() {
        super();
        this.state = {
            bookings: [],
            msg: '',
        }
    }

    async componentDidMount() {
        const cookies = new Cookies();

        // localStorage.getItem('localToken') ---  5MB data storage
        // sessionStorage.getItem('localToken') ---  5MB data storage

        // cookies.get('authtoken') - less information 
        let userData = localStorage.getItem('userInfo');
        userData = JSON.parse(userData)
        console.log({ userData })

        const response = await axios.get('http://localhost:8081/mybookings', {
            headers: {
                token: cookies.get('authtoken')
            }
        });
        if (response.status === 200) {
            this.setState({
                bookings: response.data
            })
        }

    }

    handleUpdate = async (bookingid) => {

        const putResponse = await axios.put(`http://localhost:8081/ticketupdate/${bookingid}`, {
            number: '8500554432'
        })

        this.setState({
            bookings: putResponse.data.data
        })

    }

    handleDelete = (bookingid) => {
        console.log({ bookingid })

        axios.delete(`http://localhost:8081/ticketdelete/${bookingid}`)
            .then(deleteresp => {
                console.log({ deleteresp });
                this.setState({
                    bookings: deleteresp.data.data,
                    msg: deleteresp.data.msg
                })
            })
    }

    render() {
        const { bookings, msg, errMsg } = this.state;

        return (
            <div>
                <p className="text-success font-weight-bold">{msg}</p>
                {bookings.map((bus, index) => (
                    <div className="list-item p-4 m-2" key={bus.bookingid}>
                        <h6>Booking ID:{bus.bookingid}</h6>
                        <b>{bus.type}</b>
                        <div className="d-flex justify-content-between">
                            <div>
                                <span> Time: {bus.time}</span>
                                <h6 className="mt-2">Price: ${bus.price}</h6>
                            </div>
                            <div className="logos">
                                <span className="mx-2" onClick={() => this.handleUpdate(bus.bookingid)}>
                                    <i className="fas fa-pen"></i>
                                </span>
                                <button className="h-75 btn btn-danger" type="button" onClick={() => this.handleDelete(bus.bookingid)}>
                                    Cancel Ticket
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        )
    }
}
