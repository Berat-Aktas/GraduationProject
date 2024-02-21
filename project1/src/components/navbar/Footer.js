import React from "react";
//import { withStyles } from "@mui/material";
/*
const styles = {
    root: {
        padding: "10px 20px"
    }
};
*/

function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer">
            <p>Her hakkı BankWise aittir. ©{year}</p>
        </footer>
    );
}

export default Footer;
//export default withStyles(styles)(Footer);