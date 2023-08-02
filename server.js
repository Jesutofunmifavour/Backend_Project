const express = require('express');
const userRoute = require('./Routes/userRoute');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
require('./passportSetup');

const app = express();

const port = process.env.PORT || 4000;

const dbConnect = async () => {
    try {
        db = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error);
    }
}

dbConnect();

app.use(express.json());
app.use('/', userRoute);
app.use(passport.initialize());
app.use(passport.session());


app.listen(port, () => {
    console.log(`Server running at port: ${port}`)
})