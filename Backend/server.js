const port = 3000;
const host = 'localhost';
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const e = require('express');
const { route } = require('./router');

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://chanuka17:AEnqm1XEIomGYZ1u@usermanage.nuspn93.mongodb.net/?retryWrites=true&w=majority&appName=UserManage';

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
connect();

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api',route);