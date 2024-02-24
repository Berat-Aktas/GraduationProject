import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
//import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, Box, Toolbar, Typography, AppBar, Grid } from '@mui/material';


function Header({ toggleSidebar }) {

  const [auth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
 


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>
              <AccountBalanceIcon />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                BankWise
              </Typography>

              {auth && (
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(e) => { setAnchorEl(e.currentTarget) }}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={() => { setAnchorEl(null) }}
                  >
                    <MenuItem  onClick={() => {navigate('profile'); setAnchorEl(null); }}>
                      <PersonIcon />
                      Profile
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('login');  setAnchorEl(null); }}>
                      <ExitToAppIcon />
                      Exit
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>

    </Box>
  );
}

export default Header;