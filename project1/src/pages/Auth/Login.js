import React from 'react';
import { Grid, Avatar, TextField, Button, Typography, Link, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Login() {



  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid align='center'>
          <Avatar sx={{ m: 1 , bgcolor: "success.main"}}  ><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Customer No' placeholder='Enter Customer No' required />
        <br></br>
        <br></br>

        <TextField label='Password' placeholder='Enter Password' type='password' required />
        <FormControlLabel
          control={
            <Checkbox
              name='checkedB'
              color='primary'
            />
          }
          label="Remember me"
        />

        <Button type='submit' color='primary' variant='contained'  >Sign In</Button>

        <Typography>
          <Link href='#' >
            Forgot password?
          </Link>
        </Typography>
      </Box>
    </Grid>
  )
}

export default Login;