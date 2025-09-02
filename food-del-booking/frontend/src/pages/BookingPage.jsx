import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
    const [bookingData, setBookingData] = useState(null);

    const handleBookingSubmit = async (data) => {
        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setBookingData(result);
            alert('Booking confirmed!');
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Failed to confirm booking. Please try again.');
        }
    };

    return (
        <div>
            <h1>Booking Page</h1>
            <BookingForm onSubmit={handleBookingSubmit} />
            {bookingData && (
                <div>
                    <h2>Booking Details</h2>
                    <pre>{JSON.stringify(bookingData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default BookingPage;