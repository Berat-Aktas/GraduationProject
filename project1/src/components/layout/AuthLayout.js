import React from 'react';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
// import bankWiseLogo from '../../assets/2..png';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



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
          <Typography
            sx={{
              display: 'flex', // Flex kutu yapısını etkinleştir
              alignItems: 'center', // İçerikleri dikey eksen boyunca merkezle
              justifyContent: 'center', // İçerikleri yatay eksen boyunca merkezle
              height: { xs: 35, sm: 40 },
              fontSize: '1.25rem', 
            }}
          >
            <AccountBalanceIcon sx={{ mr: 1 }} /> {/* Sağ tarafına margin ekle */}
            BankWise
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
          // backgroundImage: `url(${bankWiseLogo})`,
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
