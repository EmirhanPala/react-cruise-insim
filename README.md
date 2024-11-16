# React Node InSim - minimal example

## Requirements

- [Node.js](https://nodejs.org/) 14 or higher

## Installation

```shell
npm install
```

## Development build

```shell
npm run dev
```

The app connects to `127.0.0.1:29999` by default.

## Production build

```shell
npm run build
npm run serve:production
```

# 🏗️ Project Structure

Below is an overview of the directory and file structure along with their purposes. This is the structure of the files in the project:

```sh
    │
    ├── src                     # Source files
    │   ├── hooks               # Custom React hooks for reusable logic
    │   ├── i18n                # Internationalization configuration and files
    │   ├── layout              # Layout components and structures
    │   │   ├── map             # Map-related layout components
    │   ├── models              # Data models for the application
    │   │   ├── base            # Base models and reusable data structures
    │   │   ├── store           # Models related to data storage and management
    │   ├── pages               # Main application pages
    │   │   ├── auth            # Authentication pages (e.g., login, signup)
    │   │   ├── base            # Core pages (e.g., home, error)
    │   │   ├── packages        # Pages for features or modules
    │   │   ├── timers          # Pages related to timers or counters
    │   ├── service             # API calls and business logic
    │   │   ├── base            # Common service logic and basic API methods
    │   ├── store               # Redux store configuration and state management
    │   ├── utils               # Utility functions and reusable components
    │   ├── .eslintrc           # ESLint configuration file for code quality
    │   ├── App.tsx             # Root component of the React application
    │   ├── error.log           # Log file for application errors
    │   ├── index.tsx           # Entry point of the React application
    │   ├── log.ts              # Logging utility functions
    │   └── types.ts            # Global type definitions
    ├── .gitignore              # Specifies files and folders ignored by Git
    ├── .nvmrc                  # Specifies the Node.js version for the project
    ├── LICENSE                 # Project license information
    ├── README.md               # Project description, setup, and usage guide
    ├── package-lock.json       # Locks dependency versions for consistency
    ├── package.json            # Project dependencies and metadata
    ├── tsconfig.json           # TypeScript compiler configuration
    └── yarn.lock               # Locks dependencies for Yarn package manager
```

# 📖 Learn More

You can learn more in the [React Node InSim](https://github.com/simbroadcasts/react-node-insim).

To learn ReactNodeInSim, check out the [React Node InSim Documentation](https://github.com/simbroadcasts/react-node-insim/blob/main/README.md).













# License
This project and its contents may not be copied, distributed, or used in any way without the written permission of the author. The author reserves the right to make the project private at any time.

# Lisans
Bu proje ve içeriği, yazarın yazılı izni olmadan kopyalanamaz, dağıtılamaz veya herhangi bir şekilde kullanılamaz. Yazar, projenin herhangi bir zamanda özel hale getirilme hakkını saklı tutar.
