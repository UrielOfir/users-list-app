# Full-Stack User Data Management Application

## Welcome

Welcome to the Full-Stack User Data Management Application! This application is designed to showcase my skills in full-stack development by integrating data scraping, API development, and a responsive React front-end.

## Backend: Data Scraping and API

### 1. Data Scraping

To populate our database, we'll be scraping 1 million fake user data entries from the Random User Generator API with a focus on U.S. nationality. Each API request can retrieve up to 5,000 users. The data will be stored in RavenDB, utilizing the free cloud version from RavenDB Cloud.

### 2. API Development

A simple REST API has been developed to interact with the database. Key features include endpoints for fetching paginated user data and individual user details.

### 3. Performance and Error Handling

- **Performance Tracking:** The application includes performance tracking for the data scraping process. Achieving performant scraping is considered a bonus.
  
- **Error Handling:** Robust error handling mechanisms have been implemented for API exceptions and scraping errors.

## Frontend: Web Application (React)

### 1. User List Page

The User List Page displays a paginated list of users, with 50 results per page. Users are presented with Name, Email, and Age information. The list supports sorting based on age or name.

### 2. User Details Page

Clicking on a user in the list navigates to a detailed User Details Page, providing an in-depth view of each user, displaying all available user information.

### 3. Interactive Features

- **Search Feature:** A search feature allows users to filter the list by name or email.
  
- **Responsive Design:** The application boasts a responsive design, ensuring optimal viewing on various devices.

## Technical Specifications

- **Backend Language:** Choose any server-side language of your preference.
  
- **Frontend:** React is used for front-end development.

## Documentation

Included in this repository is a README.md file providing setup and run instructions. Additionally, a brief overview of the technical choices made during the development process is included.
