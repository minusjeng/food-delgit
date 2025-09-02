# Food Delivery Booking System

This project is a food delivery booking system that consists of a backend built with Node.js and Express, and a frontend built with React. The application allows users to make bookings for food delivery, manage their cart, and view available food items.

## Project Structure

```
food-del-booking
├── backend
│   ├── .env                # Environment variables for the backend
│   ├── package.json        # Backend dependencies and scripts
│   ├── server.js           # Entry point for the backend application
│   ├── config              # Configuration files
│   │   └── db.js          # MongoDB connection setup
│   ├── controllers         # Controllers for handling requests
│   │   ├── bookingController.js
│   │   ├── cartController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── models              # Mongoose models for data structures
│   │   ├── bookingModel.js
│   │   ├── foodModel.js
│   │   ├── orderModel.js
│   │   ├── tableModel.js
│   │   └── userModel.js
│   ├── routes              # API routes
│   │   ├── bookingRoute.js
│   │   ├── cartRoute.js
│   │   ├── foodRoute.js
│   │   ├── orderRoute.js
│   │   └── userRoute.js
│   └── middleware          # Middleware for authentication
│       └── auth.js
├── frontend                # Frontend application
│   ├── package.json        # Frontend dependencies and scripts
│   ├── vite.config.js      # Vite configuration
│   ├── index.html          # Main HTML file
│   ├── src                 # Source files for the frontend
│   │   ├── main.jsx        # Entry point for the React application
│   │   ├── App.jsx         # Main application component
│   │   ├── pages           # Pages for the frontend
│   │   │   └── BookingPage.jsx
│   │   └── components      # Reusable components
│   │       └── BookingForm.jsx
│   └── public              # Static assets
│       └── vite.svg
├── package.json            # Project-wide dependencies and scripts
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd food-del-booking
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Configuration

1. Create a `.env` file in the `backend` directory and add your MongoDB connection string and any other environment variables needed.

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

### Usage

- Navigate to the frontend application in your browser to access the booking system.
- Use the booking form to make reservations for food delivery.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.