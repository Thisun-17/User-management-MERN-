import React from 'react';
import Box from '@mui/material/Box';
import UserForm from './UserForm';
import UserTable from './UsersTable';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
];

const Users = () => {
    return (
        <Box sx={{ 
            width: '100%', 
            padding: 2,
            marginTop:'100px',  
        }}
        >
            <UserForm />
            <UserTable rows={users} /> 
        </Box>
        
    );
}

export default Users;