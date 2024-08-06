# Event Manager

This is a basic event management application using Node.js, Express, and MySQL. It allows you to create, read, update, and delete events.

## Features

- **Create Event:** Add new events with a name, date, and description.
- **Read Events:** Retrieve a list of all events.
- **Update Event:** Modify details of an existing event.
- **Delete Event:** Remove an event from the system.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) - Ensure Node.js is installed on your machine.
- [MySQL](https://www.mysql.com/) - Ensure MySQL is installed and running.

### Installation

1. **Clone the Repository:**

   ```bash
    https://github.com/web3uservj/store-details-using-MySQL.git
   cd event-manager

2. **Install dependencies:**
   
   ```bash
    npm install express mysql2 body-parser
   
3. **Configure database:**
   
   ```bash
    CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  description TEXT
);

4. **Start the server:**
   
    ```bash
    node server.js

5. **Run local host:**

   ```bash
   The server will run on http://localhost:3000.

   

   
 

   
