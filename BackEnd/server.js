const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/dbConfig'); 
const nodeRoutes = require('./src/routes/nodeRoutes'); 

require('dotenv').config();

const app = express();
app.use(cors());

connectDB();

app.use('/', nodeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
