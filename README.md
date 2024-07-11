# EstoBest Property Management System

## Introduction

EstoBest is a comprehensive property management system designed to streamline operations for property managers, landlords, and tenants. It provides a centralized platform for managing properties, handling maintenance requests, processing payments, and facilitating communication between all parties involved.

- **[Deployed Site](https://MuikiaBenson.github.io/EstoBest)**: Visit the deployed EstoBest application.
- **[Final Project Blog Article](https://www.notion.so/106d266b7c8e420b867e8fff6f1a7c09?v=2ab41ffae7334103ae3ab610e00526fb)**: Read more about the project and its development journey.
- **[Author's LinkedIn](https://www.linkedin.com/in/benson-muigai-03905b173?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1GLM5qMCQRCpRUH%2Bnw9hGA%3D%3D)**: Connect with Benson Muigai on LinkedIn.

## Table of Contents

- [Introduction]
- [Installation]
- [Usage]
- [Features]
- [Technologies Used]
- [Setup Instructions]
- [Contributing]

## Features

EstoBest offers a range of features tailored for property management:

- **User Authentication and Management:**
  - Secure authentication using JSON Web Tokens (JWT).
  - User profile management including personal information and contact details.

- **Property Management:**
  - Create, update, and manage property listings.
  - Track property statuses (available, occupied, maintenance).

- **Maintenance Requests:**
  - Tenants can submit maintenance requests.
  - Property managers can track and manage maintenance tasks.

- **Notifications and Payments:**
  - Real-time notifications for maintenance updates and payment confirmations.
  - Integration with MPESA for seamless payment processing.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A Predictable State Container for JavaScript apps.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A document-oriented NoSQL database for high performance and scalability.
- **JSON Web Tokens (JWT)**: Compact, URL-safe means of representing claims to be transferred between two parties.

### Deployment

- **Docker**: Containerization platform for building, shipping, and running applications.
- **GitHub Pages**: Hosting service to deploy the frontend application seamlessly.

## Setup Instructions

To run EstoBest locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MuikiaBenson/EstoBest.git
   cd EstoBest
Install dependencies:

    Navigate to the frontend directory:

    bash

    cd esto-best-frontend
    npm install

    Navigate to each backend microservice (e.g., user-service, property-service) and install dependencies similarly.

Set up environment variables:

    Create .env files in the root of each microservice directory based on .env.example files provided.

Start the development servers:

    Start the frontend (from /esto-best-frontend):

    bash

    npm start

    Start each backend microservice similarly.

Access EstoBest:

    Open your browser and go to http://localhost:3000 to view the application.
Contributing

Contributions are welcome! Follow these steps to contribute to EstoBest:

    Fork the repository.
    Create a new branch (git checkout -b feature/YourFeature).
    Commit your changes (git commit -am 'Add some feature').
    Push to the branch (git push origin feature/YourFeature).
    Create a new Pull Request.
