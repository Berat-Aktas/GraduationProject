import React, { useState } from 'react';
import {
    Avatar,
    Box,
    TextField,
    Typography,
    Link,
    Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from 'formik';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PasswordIcon from '@mui/icons-material/Password';



const validationSchema = yup.object({
    MAIL_ADDRESS: yup
        .string()
        .required("Please enter mail address."),
});



//Mail gönderen
const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const {user} = useAuth();

    const formik = useFormik({
        initialValues: {
            MAIL_ADDRESS: "",
        },
        validationSchema,
        onSubmit: () => {
            setLoading(true);
            setLoading(false);
        }
    });

    console.log(formik);

    const { errors, touched, handleSubmit, getFieldProps } = formik;

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
                <Avatar sx={{ m: 1, bgcolor: "success.main" }}  >
                    <PasswordIcon />
                </Avatar>
                <Typography component="h1" variant='h5' align='center' >
                    Forgot Password
                </Typography>
                <Box sx={{ alignSelf: "stretch", mt: 1 }}>
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="mail-addres"
                                label="Mail Address"
                                {...getFieldProps("MAIL_ADDRESS")}
                                error={Boolean(touched.MAIL_ADDRESS && errors.MAIL_ADDRESS)}
                                helperText={touched.MAIL_ADDRESS && errors.MAIL_ADDRESS}
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
                                Kaydet
                            </LoadingButton>
                        </Form>
                    </FormikProvider>
                    <Grid alignItems="center">
                        <Grid item xs>
                            or {' '}
                            <Link
                                variant='body2'
                                color="secondary"
                                onClick={() => { navigate('/login') }}
                                style={{ cursor: "pointer" }}
                            >
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default ForgotPassword;