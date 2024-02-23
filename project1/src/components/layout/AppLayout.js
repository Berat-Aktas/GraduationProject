import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
//import Sidebar from '../navbar/Sidebar';
import { Box } from '@mui/material';
import Sidebar2 from '../navbar/Sidebar2';
import Footer from '../navbar/Footer';
import { Outlet } from 'react-router-dom';


const AppLayout = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Navbar>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    flexGrow: 1,
                    backgroundImage: ``,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto 70vh",
                    backgroundPosition: "center",
                    width: "calc(100% - 320px)",
                }}
            >
                <Box component="main" sx={{ px: 3, mt: 10, mb: 3 }}>
                    <Outlet />
                </Box>
                <Footer />
            </Box>
        </Navbar>
        // <>
        //     <Box display="flex">
        //         <Sidebar2 />
        //         <Box flexGrow={1}>
        //             <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        //             <Grid container spacing={2}>
        //                 <Grid item xs={12}>
        //                     {children}
        //                 </Grid>
        //             </Grid>
        //         </Box>
        //     </Box>
        //     <Footer />
        // </>
    )
}

export default AppLayout;