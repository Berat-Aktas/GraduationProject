import React, { useState } from 'react';
import {
  Avatar,
  TextField,
  Typography,
  Link,
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
  Grid
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SaveIcon from '@mui/icons-material/Save';



function Login() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  
  const [showPasswords, setShowPasswords] = useState({
    PASSWORD: false,
  });

  const handleShowPassword = (name) => {
    setShowPasswords((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  };

  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        height: "100%",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "success.main" }}  >
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant='h5' align='center' >
        Sign In
      </Typography>

      <Box sx={{ alignSelf: "stretch", mt: 1 }} >
        <TextField
          margin="normal"
          required
          fullWidth
          autoComplete="customer-no"
          label='Customer No'
        />
        <TextField
          margin="normal"
          required
          fullWidth
          autoComplete="PASSWORD"
          type={showPasswords.PASSWORD ? "text" : "password"}
          label='Password'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleShowPassword("PASSWORD")}
                  edge="end"
                >
                  {showPasswords.PASSWORD ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              name='checkedB'
              color='primary'
            />
          }
          label="Remember me"
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="success"
          loading={loading}
          startIcon={<SaveIcon />}
        >
          SAVE
        </LoadingButton>
        <Grid alignItems="center">
          <Grid item xs>
            <Link
              variant='body2'
              color="secondary"
              onClick={() => { navigate('/forgot-password') }}
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Login;