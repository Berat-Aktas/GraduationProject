import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

//Icons
import HouseIcon from '@mui/icons-material/House';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Typography } from '@mui/material';

function Sidebar2() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav>
                    <Typography alignItems="center">
                        <p>BankWise</p>
                    </Typography>
                </nav>
                <Divider />
                <nav aria-label="Kullanıcı İşlemleri">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/main-page">
                                <ListItemIcon>
                                    <HouseIcon />
                                </ListItemIcon>
                                <ListItemText primary="Main Page" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/deposit-money">
                                <ListItemIcon>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Deposit Money" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/withdraw-money">
                                <ListItemIcon>
                                    <RemoveCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="Withdraw Money" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/check-balance">
                                <ListItemIcon>
                                    <AccountBalanceIcon />
                                </ListItemIcon>
                                <ListItemText primary="Check Balance" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/transfer-money">
                                <ListItemIcon>
                                    <SwapHorizIcon />
                                </ListItemIcon>
                                <ListItemText primary="Transfer Money" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
            </Box>
        </>
    )
}

export default Sidebar2;