import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from 'formik';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const {user} = useAuth();
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
                <Typography component="h1" variant='h5' align='center' >
                    Forgot Password
                </Typography>
                <Box sx={{ alignSelf: "stretch", mt: 1 }}>
                <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color="success"
                                loading={loading}
                                startIcon={<SaveIcon />}
                            >
                                Kaydet
                            </LoadingButton>
                </Box>
            </Box>
        </>
    )
}

export default ForgotPassword;