const user = require('./model');

const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Smith',
    }
];

const getusers =(req, res, next) => {
    user.find({}, (err, users) => {
        if (err) {
            return next(err);
        }
        res.json(users);
    });
};

const getUserByid = (id, cb) => {
    const user = users.find(user => user.id === id);
    if (user) {
        cb(null, user);
    } else {
        cb(new Error('User not found'));
    }
};

exports.getusers = getusers;
exports.getUserByid = getUserByid; 

