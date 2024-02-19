import React from 'react';
import {Grid, Paper, Avatar, TextField, Button, Typography, Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Register() {
    
const paperStyle={paddin: 20, height: '70vh', width: 280, margin: "20px auto"}
const avatarStyle={backgroundColor: '#1bbd7e'}
  return (
<Grid>
    <Paper elevation={10} style={paperStyle} >
           <Grid align='center'>
           <Avatar  style={avatarStyle}  ><LockOutlinedIcon /></Avatar>
           <h2>Register</h2>
           </Grid>
           <TextField  label='ID Number' placeholder='Enter ID Number' fullWidth required  />
           <TextField  label='Password' placeholder='Enter Password' type='password' fullWidth required />
           <TextField  label='Re-Password' placeholder='Re-Enter Password' type='password' fullWidth required />

           
           <Button type='submit' color='primary' variant='contained' fullWidth >Sign In</Button>



           <Typography> Do you have an account?
           <Link href='#' > 
           Sign Up
           </Link>
           </Typography>

    </Paper>
</Grid>  )
};

export default Register;