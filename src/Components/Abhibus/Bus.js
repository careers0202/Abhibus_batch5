import React, { Component, useState } from 'react';
import {
    useHistory,
    withRouter,
    Link
} from "react-router-dom"

import './abhibus.scss'

// class Bus extends Component {
//     constructor() {
//         super()
//         this.state = {
//             source: '',
//             destination: '',
//             error: false
//         }
//         this.timer = '';
//         this.count = 0;
//     }

//     handleData = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSearch = () => {
//         const { destination, source } = this.state;
//         if (source && destination) {
//             this.props.history.push(`/bus_search/${source}/${destination}`)
//             // go to bus list
//         } else {
//             this.setState({
//                 error: true
//             })
//         }
//     }

//     render() {
//         const { destination, source, error } = this.state;
//         return (
//             <div>
//                 <div class="top-view">
//                     <section class="top-section">
//                         <h3 class="text-center">Book Bus Tickets</h3>
//                         <div class="tabs">
//                             <b>Bus</b>
//                             <b>Trains</b>
//                             <b>Hotels</b>
//                         </div>
//                         <div class="input-container">
//                             <form class="d-flex">
//                                 <div class="form-sec">
//                                     <i class="fas fa-location-arrow"></i>
//                                     <input
//                                         class="form-control" type="text"
//                                         placeholder="from"
//                                         name="source"
//                                         onChange={(event) => this.handleData(event)}
//                                     />
//                                 </div>

//                                 <input
//                                     class="form-control" type="text"
//                                     placeholder="to"
//                                     name="destination"
//                                     onChange={(event) => this.handleData(event)}
//                                 />
//                                 <input type="date" />
//                                 <button type="button" class="btn btn-danger" onClick={() => this.handleSearch()}>
//                                     Search
//                                 </button>
//                             </form>
//                         </div>
//                         {error ? <p className="error">Enter Source and Destination</p> : ''}
//                     </section>
//                     <div class="container-fluid">
//                         <div class="body-section">
//                             <section class="offers">
//                                 <img src="https://static.abhibus.com/busgallery/offerbanners/Nov2021/08/1636375407/476x220.png"
//                                     alt="hdfc offer" />
//                                 <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683656/476X220.png"
//                                     alt="hdfc offer" />
//                                 <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683049/476X220.png"
//                                     alt="hdfc offer" />
//                                 <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471295/cred-476x220.png"
//                                     alt="hdfc offer" />
//                                 <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/17/1634447824/Homepage-476X220.png"
//                                     alt="hdfc offer" />
//                             </section>


//                             <div class="travelAdvisory">
//                                 <h1>COVID-19 Related Travel Advisory</h1>
//                                 <p class="title">
//                                     abhiBus recommends that every passenger must follow the <a class="travelNote"
//                                         href="https://www.abhibus.com/corona" target="_blank">Covid
//                                         Safety Guidelines</a> to ensure a
//                                     <a class="travelNote" href="https://www.abhibus.com/corona" target="_blank">
//                                         Safety Guidelines</a>
//                                     safe and
//                                     <a class="travel" href="https://www.abhibus.com" target="_blank">
//                                         Guidelines</a>
//                                     comfortable
//                                     travel experience during bus journeys. Strict safety protocol can ensure that we end the
//                                     pandemic
//                                     soon.
//                                     Make
//                                     sure you wear a double mask, use hand sanitiser and maintain strict social distancing while
//                                     travelling.
//                                     And
//                                     yes,
//                                     look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are handpicked, validated
//                                     bus
//                                     operators
//                                     who
//                                     follow the Covid safety protocols to ensure the safety of you and your family.

//                                     Our travel updates summarize changes reported by various sources on bus and train transportation
//                                     services.
//                                     Consider this information as a guide only and please refer to the State-wise COVID-19 Travel
//                                     Guidelines
//                                     in
//                                     India
//                                     links for further information on travel restrictions and news updates.

//                                     Follow 6 simple steps to protect yourself during Bus travel
//                                 </p>
//                             </div>

//                             <div class="faq">
//                                 <h1>Frequently Asked Questions on Online Bus Booking</h1>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                             </div>
//                             <div class="faq">
//                                 <h1>Frequently Asked Questions on Online Bus Booking</h1>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                                 <h4>How do you do online bus reservation on AbhiBus?</h4>
//                                 <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
//                                     Going to
//                                     destination details along with the date you wish to travel in the bus search option on the site.
//                                     Within
//                                     seconds
//                                     you will be given a list of buses availability for your route. Select your bus that suits you
//                                     best
//                                     for
//                                     you.
//                                     Then
//                                     just follow the simple steps to the ticket booking payment process and your seat will be
//                                     reserved
//                                     for
//                                     your
//                                     bus
//                                     journey.
//                                 </p>
//                             </div>

//                             <div>
//                                 <h1>Benefits of Booking Bus Tickets Online</h1>
//                                 <p class="imp">In this day and age of technology, offline modes of bus ticket booking are no more a
//                                     preference.
//                                     Online
//                                     ticket booking is easy, fast and hassle-free. AbhiBus ticks off all three with our easy app and
//                                     website
//                                     navigation.

//                                     Booking bus tickets online with AbhiBus has solved many problems that people face while booking
//                                     their
//                                     tickets at offline counters or travel agents. Download the AbhiBus App to see the benefits of
//                                     making
//                                     a
//                                     bus
//                                     ticket booking online.</p>
//                                 <ol>
//                                     Here's listing all the benefits of booking bus tickets online on AbhiBus
//                                     <li>Avoid standing in long queues at offline bus ticket counters.</li>
//                                     <li>No more hassle of approaching travel agents.</li>
//                                 </ol>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="chatbot">
//                     <img src="https://static.abhibus.com/chatbot/chat-pop.png" alt="charbot" />
//                 </div>
//             </div >
//         )
//     }
// }

// export default withRouter(Bus)




export default function Bus() {
    const [searchData, setSearchData] = useState({});
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleData = (event) => {
        setSearchData({ ...searchData, [event.target.name]: event.target.value })

    }

    const handleSearch = () => {
        const { destination, source } = searchData;
        if (source && destination) {
            history.push(`/bus_search/${source}/${destination}`)
        } else {
            setError(true)
        }
    }

    console.log({ searchData })
    return (
        <div>
            <div class="top-view">
                <section class="top-section">
                    <h3 class="text-center">Book Bus Tickets</h3>
                    <div class="tabs">
                        <b>Bus</b>
                        <b>Trains</b>
                        <b>Hotels</b>
                    </div>
                    <div class="input-container">
                        <form class="d-flex">
                            <div class="form-sec">
                                <i class="fas fa-location-arrow"></i>
                                <input
                                    class="form-control" type="text"
                                    placeholder="from"
                                    name="source"
                                    onChange={(event) => handleData(event)}
                                />
                            </div>

                            <input
                                class="form-control" type="text"
                                placeholder="to"
                                name="destination"
                                onChange={(event) => handleData(event)}
                            />
                            <input type="date" />
                            <button type="button" class="btn btn-danger" onClick={() => handleSearch()}>
                                Search
                            </button>
                        </form>
                    </div>
                    {error ? <p className="error">Enter Source and Destination</p> : ''}
                </section>
                <div class="container-fluid">
                    <div class="body-section">
                        <section class="offers">
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Nov2021/08/1636375407/476x220.png"
                                alt="hdfc offer" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683656/476X220.png"
                                alt="hdfc offer" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683049/476X220.png"
                                alt="hdfc offer" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471295/cred-476x220.png"
                                alt="hdfc offer" />
                            <img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/17/1634447824/Homepage-476X220.png"
                                alt="hdfc offer" />
                        </section>


                        <div class="travelAdvisory">
                            <h1>COVID-19 Related Travel Advisory</h1>
                            <p class="title">
                                abhiBus recommends that every passenger must follow the <a class="travelNote"
                                    href="https://www.abhibus.com/corona" target="_blank">Covid
                                    Safety Guidelines</a> to ensure a
                                <a class="travelNote" href="https://www.abhibus.com/corona" target="_blank">
                                    Safety Guidelines</a>
                                safe and
                                <a class="travel" href="https://www.abhibus.com" target="_blank">
                                    Guidelines</a>
                                comfortable
                                travel experience during bus journeys. Strict safety protocol can ensure that we end the
                                pandemic
                                soon.
                                Make
                                sure you wear a double mask, use hand sanitiser and maintain strict social distancing while
                                travelling.
                                And
                                yes,
                                look out for Safe-T Bus Operators while booking. Safe-T Bus Partners are handpicked, validated
                                bus
                                operators
                                who
                                follow the Covid safety protocols to ensure the safety of you and your family.

                                Our travel updates summarize changes reported by various sources on bus and train transportation
                                services.
                                Consider this information as a guide only and please refer to the State-wise COVID-19 Travel
                                Guidelines
                                in
                                India
                                links for further information on travel restrictions and news updates.

                                Follow 6 simple steps to protect yourself during Bus travel
                            </p>
                        </div>

                        <div class="faq">
                            <h1>Frequently Asked Questions on Online Bus Booking</h1>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                        </div>
                        <div class="faq">
                            <h1>Frequently Asked Questions on Online Bus Booking</h1>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                            <h4>How do you do online bus reservation on AbhiBus?</h4>
                            <p>Ans: Booking a bus ticket online in India is easy with ABHIBUS. Simply enter the Leaving from --
                                Going to
                                destination details along with the date you wish to travel in the bus search option on the site.
                                Within
                                seconds
                                you will be given a list of buses availability for your route. Select your bus that suits you
                                best
                                for
                                you.
                                Then
                                just follow the simple steps to the ticket booking payment process and your seat will be
                                reserved
                                for
                                your
                                bus
                                journey.
                            </p>
                        </div>

                        <div>
                            <h1>Benefits of Booking Bus Tickets Online</h1>
                            <p class="imp">In this day and age of technology, offline modes of bus ticket booking are no more a
                                preference.
                                Online
                                ticket booking is easy, fast and hassle-free. AbhiBus ticks off all three with our easy app and
                                website
                                navigation.

                                Booking bus tickets online with AbhiBus has solved many problems that people face while booking
                                their
                                tickets at offline counters or travel agents. Download the AbhiBus App to see the benefits of
                                making
                                a
                                bus
                                ticket booking online.</p>
                            <ol>
                                Here's listing all the benefits of booking bus tickets online on AbhiBus
                                <li>Avoid standing in long queues at offline bus ticket counters.</li>
                                <li>No more hassle of approaching travel agents.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chatbot">
                <img src="https://static.abhibus.com/chatbot/chat-pop.png" alt="charbot" />
            </div>
        </div >
    )
}

// withRouter - HOC(Higher Order Component)
