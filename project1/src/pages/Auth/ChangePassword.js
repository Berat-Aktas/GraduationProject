import React, { useState } from 'react';
import {
    Avatar,
    Box,
    IconButton,
    InputAdornment,
    TextField,
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


const validationSchema = yup.object({

    OLD_PASSWORD: yup
        .string()
        .required("Eski Şifreyi giriniz."),

    NEW_PASSWORD: yup
        .string()
        .min(10, " Şifre minimum 10 karakter olmalı.")
        .matches(
        // //eslint-disable-next-line
        // /^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*{8,})/,
        // "Parola en az bir küçük harf, bir büyük harf, bir rakam ve bir sembol içermelidir"
    )
        .required("Yeni şifre girilmesi zorunludur."),
    NEW_PASSWORD_AGAIN: yup
        .string()
        .oneOf(
            [yup.ref("NEW_PASSWORD")],
            "Girilen şifreler eşleşmiyor"
        )
        .required("Yeni şifrenin tekrar girilmesi zorunludur.")
});


const ChangePassword = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const {user} = useAuth();

    const formik = useFormik({
        initialValues: {
            OLD_PASSWORD: "",
            NEW_PASSWORD: "",
            NEW_PASSWORD_AGAIN: "",
        },
        validationSchema,
        onSubmit: () => {
            setLoading(true);
            setLoading(false);
        }
    });

    console.log(formik);

    const { errors, touched, handleSubmit, getFieldProps } = formik;

    const [showPasswords, setShowPasswords] = useState({
        OLD_PASSWORD: false,
        NEW_PASSWORD: false,
        NEW_PASSWORD_AGAIN: false,
    });

    const handleShowPassword = (name) => {
        setShowPasswords((prev) => ({
            ...prev,
            [name]: !prev[name],
        }))
    };
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
                    Change Password
                </Typography>
                <Typography component="h2" variant='subtitle1' sx={{ my: 2 }}  >
                    Şifre Uyarısı
                </Typography>
                <Box sx={{ alignSelf: "stretch", mt: 1 }}>
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}> 
                        <TextField
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="old-password"
                                type={showPasswords.OLD_PASSWORD ? "text" : "password"}
                                label="Eski Şifre"
                                {...getFieldProps("OLD_PASSWORD")}
                                error={Boolean(touched.OLD_PASSWORD && errors.OLD_PASSWORD)}
                                helperText={touched.OLD_PASSWORD && errors.OLD_PASSWORD}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleShowPassword("OLD_PASSWORD")}
                                                edge="end"
                                            >
                                                {showPasswords.OLD_PASSWORD ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="new-password"
                                type={showPasswords.NEW_PASSWORD ? "text" : "password"}
                                label="Yeni Şifre"
                                {...getFieldProps("NEW_PASSWORD")}
                                error={Boolean(touched.NEW_PASSWORD && errors.NEW_PASSWORD)}
                                helperText={touched.NEW_PASSWORD && errors.NEW_PASSWORD}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleShowPassword("NEW_PASSWORD")}
                                                edge="end"
                                            >
                                                {showPasswords.NEW_PASSWORD ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="new-password-again"
                                type={showPasswords.NEW_PASSWORD_AGAIN ? "text" : "password"}
                                label="Yeni Şifre Tekrar"
                                {...getFieldProps("NEW_PASSWORD_AGAIN")}
                                error={Boolean(touched.NEW_PASSWORD_AGAIN && errors.NEW_PASSWORD_AGAIN)}
                                helperText={touched.NEW_PASSWORD_AGAIN && errors.NEW_PASSWORD_AGAIN}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleShowPassword("NEW_PASSWORD_AGAIN")}
                                                edge="end"
                                            >
                                                {showPasswords.NEW_PASSWORD_AGAIN ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
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
                </Box>
            </Box>


        </>
    )
}

export default ChangePassword;