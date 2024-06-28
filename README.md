# Employee Tracker

## Description
Employee Tracker is a command-line application that allows business owners to view and manage the departments, roles, and employees in their company. The application uses Node.js, Inquirer, and PostgreSQL to interact with and manage a company's employee database.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-tracker.git
   cd employee-tracker
2. npm install
3. Set up your PostgreSQL database:
    * Create the database and tables by running the SQL scripts:
        psql -U your_postgres_username -f schema.sql
        psql -U your_postgres_username -f seeds.sql

4. Configure the database connection:
    * Edit the config/db.js file with your PostgreSQL credentials.

## Usage
To start the application, run:
    node index.js

## Video Demonstaration

[link the demo video](./employee.mov) 

![](./employee.mov)