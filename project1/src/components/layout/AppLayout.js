import React, { useState } from 'react';
import Header from '../navbar/Header';
import { Box, Grid } from '@mui/material';
import Sidebar from '../navbar/Sidebar';
// import Footer from '../navbar/Footer';
import { Outlet } from 'react-router-dom';


const AppLayout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar'ın açık/kapalı durumunu kontrol eder

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Sidebar durumunu değiştir
    };

    return (
        <>
            <Box display="flex">
                <Sidebar />
                <Box flexGrow={1}>
                    <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <Outlet />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default AppLayout;