
# EduTrack

EduTrack is a data visualization project aimed at tracking the sales performance
of an organization offering classroom and online courses across different
continents and topics. Developed using D3.js or similar library, the project
provides interactive pie charts to visualize sales data by country, continent, and
course topic. Additionally, users can explore detailed information about enrolled
students for each course.



## Features

Continent-wise Sales Visualization: Display a pie chart showing the distribution of
course sales across continents, allowing users to hover over each segment to
view sales percentages and total revenue.

**Topic-wise Sales Analysis:**

Provide separate pie charts for each course topic
(e.g., AI, Web, Android) within the online courses category, showcasing the
proportion of sales for each topic relative to total online/offline course sales. You
need to include multiple topics/subjects as per your best knowledge.

**Classroom vs. Online Sales Comparison:**

Present a comparative visualization
of sales between classroom and online courses, illustrating the revenue share
and growth trends for each vertical using the graph as per your best knowledge.
Filter it on the basis of months and year only.

**Student Enrollment Details:**

Allow users to access a detailed list of enrolled
students for each course, including their names, contact information, enrollment
dates, and course progress.


**Interactive User Interface:**

Create an intuitive user interface with
interactive features such as tooltips, zooming of a video, and filtering options to
enhance the user experience and facilitate data exploration.

**Responsive Design:**

Ensure that the project is responsive and accessible
across multiple devices, including desktops, tablets, and smartphones, to
accommodate users with different preferences and screen sizes

**Data Security and Privacy:**

Implement measures to protect sensitive student
information, such as encryption, access controls, and data anonymization, to
comply with privacy regulations and maintain data integrity

**Hackathon-ready Solution:**

Package the project with clear instructions for
setup, configuration, and customization, enabling high school students to quickly
deploy and present their visualization solution during hackathons or competitions.


## Technology Used

**Client:** 

**React:** JavaScript library for building user interfaces.

**Nivo:** Data visualization library for React.

**Material-UI (MUI/MUI-X):** React UI components for modern web applications.

**React Router DOM:** For client-side routing within the application.

**Server:** 

**Node.js:** JavaScript runtime environment for server-side development.

**Express.js:** Web application framework for Node.js.

**MongoDB:** NoSQL database for data storage.

**Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.


## Package Used

**Client-side**

**@emotion/react:** Library for CSS-in-JS styling.

**@mui/icons-material:** Material-UI icons for the application.

**@mui/material:** Material-UI components for UI design.

**@mui/x-data-grid:** Data grid component for Material-UI.

**@nivo/bar, @nivo/core, @nivo/geo, @nivo/line, @nivo/pie:**
 Nivo chart components.

**Server-side**
**body-parser:** Middleware for parsing incoming request bodies.

**cors:** Middleware for enabling cross-origin resource sharing.

**dotenv:** Module for loading environment variables from a .env file into process.env.

**express:** Web application framework for Node.js.

**mongoose:** ODM library for MongoDB and Node.js.

**nodemon:** Utility for automatically restarting the Node.js server upon file changes.




## Folder Structure

MERN-Dashboard/
│
├── client/               # Client-side codebase (React)
│   ├── public/
│   ├── src/
|   |   ├── assets/       # Static assets
│   │   ├── components/   # React components
│   │   ├── scenes/       # Different pages for the dashboard
│   │   ├── state/        # API service functions
│   │   ├── main.jsx      # Main application component
|   ├── .env              # Environment variables (not committed to version control)
|   ├── package.json      # Client-side dependencies and scripts
│   │   └── ...
│   └── ...
│
├── server/               # Server-side codebase (Node.js, Express)
│   ├── controllers/      # Route controllers
│   ├── models/           # Database models (Mongoose)
│   ├── routes/           # API routes
│   ├── data/             # Raw data used to populate the database
│   ├── app.js            # Express app configuration
|   ├── .env              # Environment variables (not committed to version control)
|   ├── package.json      # Server-side dependencies and scripts
scripts
│   │   └── ...
│   └── ...

## Installation

**Environment Variables**

The project uses environment variables stored in a .env file for configurations. Ensure to set up necessary variables like database connection strings, API keys, or any other sensitive information.

**Getting started**

**Clone this repository to your local machine:**

https://github.com/codingwithv/EduTrack.git

**Change to the project directory:**

cd EduTrack

**Install and run client dependencies:**

cd frontend

npm install

npm start


**Install and run server dependencies:**

cd backend

npm install

npm run dev
