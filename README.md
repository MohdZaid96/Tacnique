
# User Management Dashboard

## Overview

The User Management Dashboard is a web application designed for user management operations such as viewing, adding, editing, and deleting user details. It interacts with a mock backend API, specifically using the JSONPlaceholder API for demonstration and testing purposes.

## User Interface

The dashboard provides a user-friendly interface with the following features:

1. **User List:** Displays a list of users with details including ID, First Name, Last Name, Email, and Company.

2. **Action Buttons:**
   - "Add": Allows users to add a new user.
   - "Edit": Enables users to edit existing user details.
   - "Delete": Allows users to delete a selected user.

3. **User Form:**
   - Provides a form to input details for a new user or edit existing user details.

## Backend Interaction

The application interacts with the JSONPlaceholder API using the '/users' endpoint for fetching and manipulating user data.

API Endpoint: [JSONPlaceholder '/users'](https://jsonplaceholder.typicode.com/users)

## Functionality

### View Users

- Displays a list of users by fetching data from the '/users' endpoint.

### Add User

- Allows users to add a new user by posting to the '/users' endpoint.
- Note: JSONPlaceholder simulates a successful response for demonstration purposes.

### Edit User

- Enables users to edit details of an existing user.
- Involves fetching the current data for a user, allowing edits, and then updating the data via the API.

### Delete User

- Allows users to delete a selected user by sending a delete request to the API.

### Error Handling

- Handles scenarios where the API request might fail and displays an error message to the user in such cases.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the application using `npm start`.

## Technologies Used

- React
- React-Router-Dom
- Axios