import React from 'react';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';



const AuthLayout = () => {
  return (
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ display: "flex", flexDirection: "column", height: "inherit" }}
        >
          <Box
            boxShadow={1}
            sx={{
              backgroundColor: "primary.main",
              color: "#fff",
              padding: ".25rem",
              height: { xs: "56px", sm: "64px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* LOGO */}
            <Typography
              height={{ xs: 35, sm: 40 }}
            >
              <img
                src={null}
                alt="BankWise LOGO"
                style={{ height: "inherit" }}
              />
            </Typography>
          </Box>
          <Box sx={{
            mb: 2,
            mx: 4,
            flexGrow: "1",
          }}
          >
            <Outlet />
          </Box>
          <Copyright />
        </Grid>

        <Grid
          item
          sm={false}
          sx={{
            backgroundImage: ``,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
  )
}

export default AuthLayout;

function Copyright(props) {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      sx={{ backgroundColor: "primary.main", color: "#fff" }}
      p={2}
    >
      <Typography 
      variant='body2' align='center' {...props}
      >
      {"Copyright © "}
      {new Date().getFullYear()}{" "}{"BankWise"}
      </Typography>
    </Stack>
  );
}
