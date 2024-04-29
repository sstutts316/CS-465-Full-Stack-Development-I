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

 ### Reflective Journal Entry

#### Architecture

Frontend Development Comparison: The project leveraged Express HTML for basic page rendering, which is straightforward but less dynamic. JavaScript was used to enhance pages with interactive elements. The Angular SPA transformed the customer interface into a highly interactive and responsive experience, allowing for real-time updates without page reloads.
Choice of MongoDB: MongoDB, a NoSQL database, was selected for its flexibility in handling data structures that change over time, its scalability, and its strong performance with large data sets, making it ideal for dynamic web applications where data structures can evolve.

#### Functionality

JSON vs. JavaScript: JSON (JavaScript Object Notation) is a lightweight data-interchange format, easily readable by humans and parsed by machines. Unlike JavaScript, a programming language, JSON is merely a way to represent data structures. It seamlessly ties together the front end and back end by serving as a universal data format for sending and receiving API requests and responses.
Refactoring and UI Components: Refactoring was essential for enhancing performance and maintainability throughout the development process. For example, converting repetitive code into reusable Angular components (e.g., a unified booking form) not only streamlined the codebase but also improved the UI consistency across different application parts.

&nbsp;

#### Testing

API Testing: Testing involved verifying the functionality and security of API endpoints. Using tools like Postman, I simulated requests to endpoints for creating, retrieving, updating, and deleting data (CRUD operations) to ensure they handled data correctly and securely.
Security Testing: With security being paramount, particularly for the administrative functions, testing focused on authentication mechanisms and ensuring that data transmissions were encrypted and that endpoints were protected against unauthorized access.

#### Reflection

Professional Growth: This course has significantly bolstered my full stack development skills, particularly in Angular and Express, which are highly sought after in the industry. It has improved my ability to design and implement both the client and server sides of an application, making me a more versatile and marketable candidate.
Skills Development: Key skills developed include creating and managing a RESTful API, performing CRUD operations with a MongoDB database, implementing secure authentication, and developing dynamic SPAs. These skills are critical for modern web development roles and increase my readiness for advanced projects and employment opportunities.

## Contributing
Contributions are welcome. Please fork the repository and submit a pull request with your enhancements.

## Testing
- **Angular Testing**: Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- **E2E Testing**: Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License
This project is licensed under the MIT License - see the LICENSE file for details.

