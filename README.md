**Insurance Company Web Application**
=====================================

**Overview**
------------

This web application is built using Next.js, a popular React-based framework for building server-side rendered (SSR) and statically generated websites. 
The application provides a comprehensive solution for both users and agents in the insurance industry, enabling users to obtain insurance quotes and agents to manage client policies efficiently.

**Features**
------------

### User Features

*   **Real-time Quotes**: The application utilizes a RESTful API to fetch insurance quotes in real-time, providing users with instant quotes for auto, home, life, and health insurance.
*   **Policy Management**: Agents can manage client policies through an intuitive dashboard, updating statuses, and issuing new policies with ease.
*   **User  Authentication**: The application implements secure login and registration for both users and agents, ensuring only authorized individuals can access sensitive information.
*   **Responsive Design**: The application is optimized for various devices, including desktops, tablets, and mobile devices, providing a seamless user experience across different screen sizes and resolutions.
*   **Secure Data Handling**: The application ensures user data security with industry-standard encryption and authentication, protecting sensitive information from unauthorized access.
*   **Comprehensive Coverage Options**: The application offers a variety of coverage options to suit different needs and budgets, enabling users to choose the best coverage for their requirements.
*   **Easy Policy Updates**: Agents can update policy details, such as coverage amounts, deductibles, and payment schedules, with ease, ensuring accurate and up-to-date policy information.
*   **Client Portal**: Clients can access policy information, make payments, and update contact details through a secure and user-friendly portal.
*   **Agent Portal**: Agents can manage client policies, view policy history, and generate reports through a dedicated portal, streamlining their workflow and improving productivity.

### Technical Features

*   **Server-Side Rendering (SSR)**: The application utilizes Next.js to enable server-side rendering, improving page load times and search engine optimization (SEO).
*   **Static Site Generation (SSG)**: The application can be built as a statically generated website, reducing server load and improving performance.
*   **API Integration**: The application integrates with a RESTful API to fetch insurance quotes and manage policy information, enabling seamless communication between the frontend and backend.
*   **State Management**: The application utilizes React Context API for state management, ensuring efficient and scalable state management across the application.

**Project Structure**
---------------------

The project is organized into the following directories and files:

*   `components`: Reusable React components, such as buttons, forms, and tables.
*   `containers`: Higher-order components that wrap other components, providing additional functionality and layout.
*   `models`: Data models used in the application, defining the structure and schema of policy information and user data.
*   `pages`: Application pages, including the homepage, policy management page, and client portal.
*   `services`: API services, handling communication between the frontend and backend, including fetching insurance quotes and managing policy information.
*   `utils`: Utility functions, providing helper functions for tasks such as data formatting and validation.
*   `styles`: Global styles, defining the application's layout, typography, and color scheme.
*   `index.js`: Main entry point, rendering the application and handling routing.
*   `App.js`: Main application component, wrapping the application's pages and components.
*   `index.html`: Main HTML file, serving as the application's entry point.
*   `package.json`: Project's package file, defining dependencies and scripts.
*   `.env.local`: Environment variables, storing sensitive information such as API keys and database credentials.
*   `README.md`: This file, providing an overview of the project and its features.
*   `CONTRIBUTING.md`: Contribution guidelines, outlining the process for contributing to the project.
*   `LICENSE`: License file, defining the project's licensing terms and conditions.

**Prerequisites**
-----------------

*   **Node.js**: Version 14.x or above, providing a JavaScript runtime environment for the application.
*   **npm**: Version 6.x or above, providing a package manager for installing dependencies and managing scripts.

**Installation**
--------------

1.  Clone the repository:

    ```bash
git clone https://github.com/Manojgupta103/Insurance.git
```

2.  Install dependencies:

    ```bash
npm install
```

3.  Set up environment variables in `.env.local`.

**Running the Application**
---------------------------

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application. The page will reload on edits.

**Building for Production**
---------------------------

Create a production build:

```bash
npm run build
```

Start the application:

```bash
npm start
```

**Contributing**
--------------

We welcome contributions. Please follow our [contribution guidelines](CONTRIBUTING.md).

**License**
----------

This project is licensed under the MIT License