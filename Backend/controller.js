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

const getusers =(cb) => {
    cb(null, users);
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

