import React from "react";
import Box from '@mui/material/Box';


function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <Box>
                <footer><p>Her hakkı BankWise aittir. ©{year}</p></footer>
            </Box>
        </>
    );
}

export default Footer;