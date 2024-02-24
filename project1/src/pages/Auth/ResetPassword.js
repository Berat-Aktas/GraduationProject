import React from 'react';
import { Avatar, Box } from '@mui/material';


const ResetPassword = () => {
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
                ResetPassword
            </Box>
        </>
    )
}

export default ResetPassword;