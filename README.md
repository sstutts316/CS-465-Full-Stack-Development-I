# CS-465-Full-Stack-Development-I

# Full Stack Web Application - Travlr Getaways

## Description
This project is a full stack web application that serves both customer-facing and administrative functions for Travlr Getaways, a fictional travel booking company. It combines Angular for the frontend to create a dynamic single-page application (SPA) with Express and MongoDB on the backend.

## Features
- Interactive customer-facing booking interface built with Angular.
- Administrative dashboard for managing bookings with secure login.
- Real-time data interaction and responsive design.

## Architecture
- **Frontend**: Built with Angular, leveraging components, services, and Angular Router for a SPA experience. This setup enables a highly interactive user interface with minimal reloads.
- **Backend**: Utilizes Express.js to handle API requests and perform server-side logic, interfacing with a MongoDB database for data persistence.
- **Database**: MongoDB is used for storing and retrieving data dynamically, which allows flexibility in data structure changes over time.

## Setup and Installation
### Prerequisites
- Node.js and npm installed (https://nodejs.org/)
- MongoDB set up either locally or remotely (https://mongodb.com/)

### Steps
1. Clone the repository:
git clone [repository_url]

2. Navigate into the project directory:
cd travlr

3. Install dependencies:
npm install

4. Start the Angular development server:
ng serve
This command serves the app at `http://localhost:4200/` and will automatically reload if you change any of the source files.

5. In a new terminal, start the Express backend server:
npm start
This serves the backend API at `http://localhost:3000/`.

## Usage
- Navigate to `http://localhost:4200/` to access the customer-facing booking interface.
- For administrative functions, access the admin dashboard through the `/admin` route (e.g., `http://localhost:4200/admin`).

## Contributing
Contributions are welcome. Please fork the repository and submit a pull request with your enhancements.

## Testing
- **Angular Testing**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **E2E Testing**: Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License
This project is licensed under the MIT License - see the LICENSE file for details.

