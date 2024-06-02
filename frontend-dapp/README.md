<div style="text-align: center;">
  <img src="/frontend-dapp/src/assets/trident.png" alt="Project Logo" width="100"/>
</div>

# Trident Frontend DApp

This is a React frontend project that uses the Alchemy API KEY and requires authentication with a client ID defined on the Dynamic.xyz website. Follow the instructions below to set up and run the project on your local environment.

## Setup

Before starting the project, you need to configure some environment variables. There is a provided `.env.example` file in the root of the project. Rename this file to `.env` and add the required variables.

### Setup Steps

### 1. **Clone the repository:**

```sh
git clone https://github.com/BellumGalaxy/BlockMagic-Trident/tree/main/frontend-dapp
cd frontend-dapp
```

### 2. Setting up Environment Variables

**Rename the `.env.example` file:**

In the root of the project, rename the `.env.example` file to `.env` and add the provided variables:

```sh
mv .env.example .env
```

#### `REACT_APP_ALCHEMY_API_KEY`

The `REACT_APP_ALCHEMY_API_KEY` is required to access the Alchemy API for Ethereum blockchain integration.

1. **Obtain the Alchemy API Key:**

   - Go to [Alchemy Dashboard](https://dashboard.alchemy.com/apps).
   - Click on "Create App" and give your app a name (e.g., MyReactApp).
   - Select "Ethereum" as the blockchain and choose the appropriate network (e.g., Sepolia).
   - Your API key will be generated automatically. Copy it.

2. **Configure Your Project:**

   - In your project directory, locate the `.env` file.
   - Open the `.env` file and edit the following line:

     ```env
     REACT_APP_ALCHEMY_API_KEY=your_alchemy_api_key_here
     ```

     Replace `your_alchemy_api_key_here` with the API key obtained from the Alchemy Dashboard.

#### `REACT_APP_CLIENT_ID`

The `REACT_APP_CLIENT_ID` is required for authentication and access to the Dynamic wallet services.

1. **Access Dynamic.xyz Developer Dashboard:**

   - Go to the [Dynamic.xyz website](https://app.dynamic.xyz/).
   - Navigate to the 'Developers' section.

2. **Find SDK & API Keys:**

   - Locate the 'SDK & API Keys' section within the Developers section.

3. **Copy the Environment ID**

4. **Configure Your Project:**

   - Open the `.env` file in your project directory.
   - Edit the following line in your `.env` file:

     ```env
     REACT_APP_CLIENT_ID=your_dynamic_client_id_here
     ```

   - Replace `your_dynamic_client_id_here` with the environment ID obtained from the Dynamic.xyz Developer Dashboard.

5. **Save and Use:**

   - Save the `.env` file.
   - You can now access `process.env.REACT_APP_ALCHEMY_API_KEY` for Alchemy API and `process.env.REACT_APP_CLIENT_ID` for Dynamic wallet in your React project to integrate blockchain functionality and authentication.

By following these steps, you ensure that your React application is properly configured to use both `REACT_APP_ALCHEMY_API_KEY` and `REACT_APP_CLIENT_ID` for interacting with Alchemy and Dynamic wallet respectively.

### 3. **Install the dependencies:**

   Using `npm`:

   ```sh
   npm install
   ```

   Or using `yarn`:

   ```sh
   yarn install
   ```

### 4. **Run the project:**

   Using `npm`:

   ```sh
   npm start
   ```

   Or using `yarn`:

   ```sh
   yarn start
   ```

   The project will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
