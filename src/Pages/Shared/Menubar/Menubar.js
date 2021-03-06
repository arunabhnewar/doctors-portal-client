import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Menubar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: '#19D3AE' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                            <Button color="inherit" >Home</Button>
                        </Link>
                        <Link to="/appointment" style={{ textDecoration: 'none', color: 'white' }}>
                            <Button color="inherit">Appointment</Button>
                        </Link>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>

                                    <Button onClick={logout} color="inherit">Sign Out</Button>
                                </Box>
                                :
                                <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button color="inherit">Sign In</Button>
                                </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    );
};

export default Menubar;