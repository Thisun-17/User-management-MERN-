const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getusers);
router.get('/user', controller.getUserByid);
router.post('/user', controller.addUser);
router.put('/user', controller.updateUser);
router.delete('/user', controller.deleteUser);

module.exports = router;