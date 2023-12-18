Weather-API

Weather-API is a web application that retrieves real-time weather information using the Weatherbit API. Users are prompted to provide their own Weatherbit API key along with their country and city to receive current weather data.

## Why Provide Your Own API Key?

We utilize a developmental API key that is valid for 18 days only. To ensure long-term functionality and personal usage, users must supply their own API key from Weatherbit.

## Features

The app provides the following weather information:

- Temperature (e.g., 6.1°C)
- Air Quality Index (e.g., 37)
- Date and Time of Observation (e.g., 2023-12-18 19:17)
- Weather Description (e.g., Light rain)
- Wind (e.g., 4.6 km/h west)
- Humidity (e.g., 78%)
- Precipitation (e.g., 0 mm)

## Getting Started

To get started with Weather-API, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone [[link to repository](https://github.com/SachithRKA/Weather-API.git)]
   ```
2. Navigate to the project directory:
   ```
   cd Weather-API
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   nodemon index.js
   ```
   or if you don't have nodemon installed,
   ```
   node index.js
   ```

2. Access the application:
   Open your web browser and visit:
   ```
   http://localhost:3000
   ```
