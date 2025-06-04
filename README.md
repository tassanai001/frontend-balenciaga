# Frontend Balenciaga

A modern React application with Apollo GraphQL integration.

## Overview

This project is a frontend application built with React and Apollo Client for GraphQL integration. It provides a robust foundation for building scalable and maintainable web applications with efficient data fetching capabilities.

## Technologies

- **React** (v18.2.0) - A JavaScript library for building user interfaces
- **Apollo Client** (via apollo-boost v0.4.9) - A comprehensive GraphQL client
- **GraphQL** (v16.8.1) - A query language for APIs
- **React Testing Library** - For testing React components

## Prerequisites

- Node.js (>=14)
- npm or yarn

## Installation

```bash
# Clone the repository
git clone [repository-url]
cd frontend-balenciaga

# Install dependencies
npm install
# or
yarn install
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.

### `npm run eject` or `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── graphql/        # GraphQL queries, mutations, and fragments
├── pages/          # Page components
├── utils/          # Utility functions
├── App.js          # Main application component
└── index.js        # Entry point
```

## GraphQL Integration

This project uses Apollo Client to interact with GraphQL APIs. The setup can be found in the application's entry point.

## Code Style

This project uses ESLint with Airbnb configuration for code linting.

## Browser Support

The application supports modern browsers as specified in the browserslist configuration in package.json.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
