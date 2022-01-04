import React, { Component, useState, useEffect } from 'react';
import axios from "axios";
import {
    useParams
} from "react-router-dom"


// export default class Buslist extends Component {
//     constructor() {
//         super();
//         this.state = {
//             buslist: [],
//             msg: ''
//         }
//     }

//     async componentDidMount() {
//         const { source, destination } = this.props.match.params;
//         const response = await axios.get(`http://localhost:8081/list/${source}/${destination}`);
//         this.setState({ buslist: response.data })

//     }

//     handleBook = async (busData) => {
//         const response = await axios.post('http://localhost:8081/book', { body: busData }); // sync 

//         this.setState({
//             msg: response.data.msg
//         })
//     }

//     render() {
//         const { source, destination } = this.props.match.params;
//         const { buslist, msg } = this.state;
//         console.log({ buslist })
//         return (
//             <div>
//                 <h4> Bus list from {source} to {destination}</h4>
//                 <p className="text-success font-weight-bold">{msg}</p>
//                 {buslist.length && buslist.map(bus => (
//                     <div className="list-item p-4 m-2">
//                         <b>{bus.type}</b>
//                         <div className="d-flex justify-content-between">
//                             <div>
//                                 <span> Time: {bus.time}</span>
//                                 <h6 className="mt-2">Price: ₹{bus.price}</h6>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="btn btn-danger h-50"
//                                 onClick={() => this.handleBook(bus)}
//                             >
//                                 Book Ticket
//                             </button>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         )
//     }
// }


export default function Buslist() {

    const [buslist, setBusList] = useState([]);
    const [msg, setMsg] = useState('');

    const { source, destination } = useParams();

    useEffect(async () => { // componentDidMount
        const response = await axios.get(`http://localhost:8081/list/${source}/${destination}`);
        setBusList(response.data)
    }, [])

    useEffect(() => { // componentWillunmount
        return () => {
            console.log('componentWillUnmount')
        }
    }, [])

    const handleBook = async (busData) => {
        const response = await axios.post('http://localhost:8081/book', { body: busData }); // sync 
        setMsg(response.data.msg)
    }



    return (
        <div>
            <h4> Bus list from {source} to {destination}</h4>
            <p className="text-success font-weight-bold">{msg}</p>
            {buslist.length && buslist.map(bus => (
                <div className="list-item p-4 m-2">
                    <b>{bus.type}</b>
                    <div className="d-flex justify-content-between">
                        <div>
                            <span> Time: {bus.time}</span>
                            <h6 className="mt-2">Price: ₹{bus.price}</h6>
                        </div>
                        <button
                            type="button"
                            className="btn btn-danger h-50"
                            onClick={() => handleBook(bus)}
                        >
                            Book Ticket
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}




