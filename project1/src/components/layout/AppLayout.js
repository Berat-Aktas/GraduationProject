import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../navbar/Footer';


const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10}>
                    {children} {/* 'children' prop'u burada kullanılıyor */}
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default AppLayout;