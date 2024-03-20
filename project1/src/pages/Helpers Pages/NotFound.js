import React from 'react';
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
     sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "calc(100vh - 37 px)"
     }}
    >
      <h1>404 Not Found</h1>
      <h2>¯\_(ツ)_/¯</h2>
    </Box>
    )
}

export default NotFound;