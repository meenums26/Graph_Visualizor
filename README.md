# Visualize Graph Data


<img width="958" alt="GraphVisualizer" src="https://github.com/user-attachments/assets/3735a57a-1fd2-495a-b353-6e54e6d1e85e">

## Project Overview
Visualize Graph Data is a web application that provides an interactive visualization of hierarchical data using D3.js. The application allows users to explore nodes and their relationships in a tree structure, providing detailed information about each node through a hover effect.

## Features
- Interactive tree visualization of hierarchical data.
- Node hover effect to display additional information.
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
   git clone https://github.com/meenums26/Graph_Visualizor
2. Navigate to the project directory:
    cd VisualizeGraphData
3. Install dependencies for the backend:
    cd BackEnd
   
    npm install
5. Install dependencies for the frontend:
    cd FrontEnd
   
    npm install
7. Create an .env file in the root of the project and define the following environment variables
   
    example username = mickel23, password = 123Secret, cluster-url = cluster0.ozu22.mongodb.net , database = graphVisualizer
    
    PORT = 5000
    
    DB_URI=mongodb+srv://username:password@cluster-url/database?retryWrites=true&w=majority

## Usage
1. Start the backend server:
    cd BackEnd
   
    npm start
3. Start the frontend application:
    cd FrontEnd
   
    npm run serve
5. Open your browser and navigate to http://localhost:8080 to view the application.
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

