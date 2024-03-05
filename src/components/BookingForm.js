import React, { useState } from 'react'


function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);

    }


    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* to set up the date */}
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>

                        {/* to set up the time */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        {/* to set up the number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number Of Guests:</label>
                            <input id='book-guests' min ='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        {/* to choose occasion */}
                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} onChange={e => setOccasion (e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        </div>
                        <div className='btnReceive'>
                            <input aria-Label='On Click' type='submit' value={"Make your Reservation"}/>

                        </div>



                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm