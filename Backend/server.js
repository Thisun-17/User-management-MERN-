const app = require('./app');
const port = 3000;
const host = 'localhost';

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});