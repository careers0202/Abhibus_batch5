import React, { Component } from 'react'

// class List extends Component {
//     render() {
//         const { cars } = this.props;
//         return (
//             <div>
//                 {cars.map((item, index) => {
//                     return (
//                         <div className="car-item" key={index}>
//                             <p>Car Name:{item.name}</p>
//                             <p>price:{item.price}</p>
//                             <p>Color:{item.color}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

const List = function (props) {
    const { cars } = props;
    return (
        <div>
            {cars.map((item, index) => {
                return (
                    <div className="car-item" key={index}>
                        <p>Car Name:{item.name}</p>
                        <p>price:{item.price}</p>
                        <p>Color:{item.color}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List;

