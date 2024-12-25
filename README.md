# Project Name

## Overview
This repository contains the codebase for a web application built with React.js, Next.js, TypeScript, and PrimeReact. The project structure includes:

- **Root Directory**: Contains the main README file.
- **client/**: Contains the client-side application code.
  - **client/README.md**: Specific instructions and documentation for the client application.

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:

- Node.js (>= 16.x)
- npm (>= 8.x) or Yarn (>= 1.x)

### Cloning the Repository
To clone this repository, run the following command:

```bash
git clone git@github.com:sntgreale/challenge-dux.git
cd challenge-dux
```

### Installing Dependencies
Navigate to the `client/` directory and install the dependencies:

```bash
cd client
npm install
# or if using Yarn
yarn install
```

### Running the Application
To start the development server, execute the following commands inside the `client/` directory:

```bash
npm run dev
# or if using Yarn
yarn dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- **client/**: Contains all the source code for the web application.
  - `pages/`: Next.js pages for routing.
  - `components/`: Reusable React components.
  - `styles/`: Application-specific styles.
  - `public/`: Static assets such as images and icons.
  - `utils/`: Utility functions and helpers.

## Technologies Used
- **React.js**: For building the user interface.
- **Next.js**: Framework for server-side rendering and routing.
- **TypeScript**: Static typing for JavaScript.
- **PrimeReact**: Component library for UI design.
- **PrimeFlex**: Utility-based CSS library for layout and styling.
- **PrimeIcons**: Icon library for use with PrimeReact components.
- **ESLint**: For linting and maintaining code quality.
- **Prettier**: For consistent code formatting.
- **Turbopack**: High-performance build tool used by Next.js.
