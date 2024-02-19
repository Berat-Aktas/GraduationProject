import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import Footer from '../navbar/Footer';
import { Box } from '@mui/material';


const AppLayout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Box display="flex">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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