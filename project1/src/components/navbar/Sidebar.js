import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Divider, ListItemButton,  ListItemIcon, ListItemText, Typography } from '@mui/material';

//Icons
import HouseIcon from '@mui/icons-material/House';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

function Sidebar() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav>
                    <Typography alignItems="center">
                        BankWise
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

export default Sidebar;