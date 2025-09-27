const express = require('express');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/ContactRoutes');
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes)

app.listen(PORT ,(req,res)=>{
    console.log(`Server listening on port ${PORT}`)
})