import React from 'react';
import { Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

    const navigate = useNavigate();

  return (
    <>
    <Box>
    <Avatar sx={{ m: 1, bgcolor: "success.main" }}  ></Avatar>
    ForgotPassword
    </Box>
    </>
  )
}

export default ForgotPassword;