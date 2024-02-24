import { Box, Typography } from "@mui/material";
import React from "react";


function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <Box
            component="footer"
            sx={{
                py: 1,
                px: 3,
                mt: "auto",
            }}
        >
            <Typography
                variant="body2"
                align="right"
            >
                {"Copyright © "}
                {new Date().getFullYear()}{" BankWise"}
            </Typography>
        </Box>
    );
}

export default React.memo(Footer);
