import React from 'react';
import { Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {

    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "success.main" }}  ></Avatar>
                ForgotPassword
            </Box>
        </>
    )
}

export default ForgotPassword;