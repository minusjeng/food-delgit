import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/bookings', {
                name,
                email,
                date,
                time,
                guests,
            });
            setMessage('Booking confirmed! Confirmation ID: ' + response.data.id);
        } catch (error) {
            setMessage('Error confirming booking. Please try again.');
        }
    };

    return (
        <div>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div>
                    <label>Number of Guests:</label>
                    <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
                </div>
                <button type="submit">Confirm Booking</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookingForm;