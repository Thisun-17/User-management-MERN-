const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());
 
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    var resobj =[];
    controller.getusers(users => {
        res.send(users);
    });

})

app.get('/user', (req, res) => {
    const id = req.query.id;
    controller.getUserByid(id, user => {
        res.send(user); 
    });
});

app.post('/user', (req, res) => {
    const userData = req.body;
    controller.addUser(userData, (err, savedUser) => {
        if (err) {
            return res.status(500).send('Error adding user');
        }
        res.status(201).json(savedUser);
    });
});

app.put('/user', (req, res) => {
    const id = req.query.id;
    const userData = req.body;
    controller.updateUser(id, userData, (err, updatedUser) => {
        if (err) {
            return res.status(500).send('Error updating user');
        }
        res.json(updatedUser);
    });
});

app.delete('/user', (req, res) => {
    const id = req.query.id;
    controller.deleteUser(id, (err) => {
        if (err) {
            return res.status(500).send('Error deleting user');
        }
        res.status(204).send();
    });
});

module.exports = app;