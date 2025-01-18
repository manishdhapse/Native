// config/config.js

const config = {
    apiUrl: "http://192.168.1.132:8000",   // Your main API URL
    authUrl: "https://auth.yourapp.com",    // Authentication API URL (if separate)
    apiKey: "your-api-key",                 // Your API Key for authorization
    timeout: 5000,                           // Timeout duration for API requests (in milliseconds)
    
    // Add any other config variables you need
    googleMapKey: "your-google-map-api-key", // Google Maps API Key
    environment: "development",             // Current environment (development, production)
  };
  
  export default config;
  