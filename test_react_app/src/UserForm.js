import React from 'react';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const UserForm = props => {

    const [id, setid] = React.useState(0);
    const [name, setName] = React.useState('');
    return (
        <Grid 
        container 
        spacing={2} 
        sx={{
            marginTop: '20px',
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px'
        }}
        >
            <Grid item xs={12} >
                <Typography variant="h4" component="h1" gutterBottom>
                    User Form
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography 
                component={'label'}
                sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '10px',
                    display: 'block',
                }}  
                >
                    ID 

                </Typography>
                <input
                    type='number'
                    id='id'
                    name="id"
                    sx= {{ width: '400px' }}
                    value={id}
                    onChange={e => setid(e.target.value)}
                />

            </Grid>

             <Grid item xs={12} sm={6}>
                <Typography 
                component={'label'}
                sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '10px',
                    display: 'block',
                }}  
                >
                    Name 

                </Typography>
                <input
                    type='text'
                    id='name'
                    name="name"
                    sx= {{ width: '400px' }}
                    value={''}
                    onChange={e => setName(e.target.value)}
                />

            </Grid>
            <Button 
                sx={{
                    marginTop: '20px',
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#115293',
                        opacity: 0.9,
                    },
                }}
            >
                Submit
            </Button>
        </Grid>
    )

    

}

export default UserForm;