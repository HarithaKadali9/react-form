const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');
const authRouter = require('./routes/auth'); // make sure this is correct

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));
app.use(express.json());

app.use('/', authRouter); // ✅ Apply your router here

connectDB()
.then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch((err) => {
    console.log("Error occurred while connecting DB", err);
});
