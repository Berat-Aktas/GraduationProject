import React from "react";



function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer><p>Her hakkı BankWise aittir. ©{year}</p></footer>
        </>
    );
}

export default Footer;