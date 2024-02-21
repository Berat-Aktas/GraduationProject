import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../navbar/Navbar';
//import Sidebar from '../navbar/Sidebar';
import { Box } from '@mui/material';
import Sidebar2 from '../navbar/Sidebar2';
import Footer from '../navbar/Footer';


const AppLayout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Box display="flex">
                <Sidebar2 />
                <Box flexGrow={1}>
                    <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {children}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default AppLayout;