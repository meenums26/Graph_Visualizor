# Visualize Graph Data


<img width="958" alt="GraphVisualizer" src="https://github.com/user-attachments/assets/3735a57a-1fd2-495a-b353-6e54e6d1e85e">

## Project Overview
Visualize Graph Data is a web application that provides an interactive visualization of hierarchical data using D3.js. The application allows users to explore nodes and their relationships in a tree structure, providing detailed information about each node through a hover effect.

## Features
- Interactive tree visualization of hierarchical data.
- Node hover effect to display additional information.
- Responsive design to accommodate various screen sizes.
- Integration with a MongoDB database for data storage and retrieval.

## Technologies Used
- **Frontend:**
  - Vue.js
  - D3.js
  - Vue Router
  - Vue Test Utils (for testing)
  
- **Backend:**
  - Node.js
  - Express.js
  - Mongoose (for MongoDB interaction)
  
- **Database:**
  - MongoDB
  
- **Testing:**
  - Jest

## Installation
1. Clone the repository:
   git clone https://github.com/yourusername/VisualizeGraphData.git
2. Navigate to the project directory:
    cd VisualizeGraphData
3. Install dependencies for the backend:
    cd BackEnd
    npm install
4. Install dependencies for the frontend:
    cd FrontEnd
    npm install
5. Set up your environment variables in a .env file in the BackEnd directory:
    DB_URI=your_mongodb_connection_string
## Usage
1. Start the backend server:
    cd BackEnd
    npm start
2. Start the frontend application:
    cd FrontEnd
    npm run serve
3. Open your browser and navigate to http://localhost:8080 to view the application.
## API End Points
1. GET /data
    Retrieves the hierarchical data from the MongoDB database.
    sample response :
  "data": [
      {
        "name": "A",
        "description": "This is a description of A",
        "parent": ""
      },
   ]

## Testing
1.Front End
  cd FrontEnd
  npm test
  
2. Back End
  cd BackEnd
  npm test

