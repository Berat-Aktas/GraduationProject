import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import { Link } from "react-router-dom";
import LaunchIcon from '@mui/icons-material/Launch';
import BlockIcon from '@mui/icons-material/Block';


const Unauthorized = () => {
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "calc(100vh - 37px)",
            px: 5,
        }}
    >
        <BlockIcon sx={{ fontSize: "48px", color: "red" }} />
        <h1>Unauthorized</h1>
        <Box textAlign="center" >
            <Typography
                component={Link}
                to="/roles/update-user-role"
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "1.25rem",
                    color: "primary.main",
                    ":hover": { color: "secondary.main" },
                }}
            >
                Kullanıcı Rollerini Düzenle
            </Typography>{" "}
            <LaunchIcon />
            <Typography
                sx={{
                    fontSize: "1.25rem"
                }}
                variant='body'
            >
                ekranı üzerinden kullanıcıya ilgili sayfayı barındıran rolü tanımlıyabilirsiniz.
            </Typography>
        </Box>
    </Box>
}

export default Unauthorized;