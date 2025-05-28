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

const addUser = (userData, cb) => {
    const newUser = new user(userData);
    newUser.save((err, savedUser) => {
        if (err) {
            return cb(err);
        }
        cb(null, savedUser);
    });
};

const getUserByid = (id, cb) => {
    user.findById(id, (err, user) => {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
};

const updateUser = (id, userData, cb) => {
    user.findByIdAndUpdate(id, userData, { new: true }, (err, updatedUser) => {
        if (err) {
            return cb(err);
        }
        cb(null, updatedUser);
    });
};

const deleteUser = (id, cb) => {
    user.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) {
            return cb(err);
        }
        cb(null, deletedUser);
    });
};

exports.getusers = getusers;
exports.getUserByid = getUserByid;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
