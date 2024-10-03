const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
// const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority&tls=true`;

mongoose.connect(process.env.DB_URI).then(()=>console.log('Connected to MongoDB'))
  .catch((error)=>console.error('MongoDB connecttion error :',error));

const nodeSchema = new mongoose.Schema({
    name: String,
    description : String,
    parent : String
});

const Nodes = mongoose.model('node',nodeSchema)

app.get('/data',async(req,res)=>{
try{
    const nodes = await Nodes.find();
    res.json({data:nodes})

}catch(error){
 res.status(500).send('Error retriving data');
}
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})
