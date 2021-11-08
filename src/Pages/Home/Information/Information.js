import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';


const Information = () => {
    return (
        <Container style={{ marginTop: '-50px' }}>
            <Grid container spacing={2} >

                <Grid item xs={12} sm={6} md={4}
                    sx={{
                        alignSelf: "center",
                        p: 1,
                    }}
                    style={{ height: "150px", color: 'white' }}
                >
                    <Typography
                        component="div"
                        sx={{
                            p: 1,
                            bgcolor: "#19D3AE",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h2" >
                                <AccessTimeIcon style={{ fontSize: '64px' }}></AccessTimeIcon>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography variant="h5">Opening Hours</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}
                    sx={{
                        alignSelf: "center",
                        p: 1,
                    }}
                    style={{ height: "150px", color: 'white' }}
                >
                    <Typography
                        component="div"
                        sx={{
                            p: 1,
                            bgcolor: "text.primary",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h2" >
                                <RoomIcon style={{ fontSize: '64px' }}></RoomIcon>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography variant="h5">Visit Our Location</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                Brooklyn, NY 10036, United States
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        alignSelf: "center",
                        p: 1,
                    }}
                    style={{ height: "150px", color: 'white' }}
                >
                    <Typography
                        component="div"
                        sx={{
                            p: 1,
                            bgcolor: "#19D3AE",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography variant="h2" >
                                <PhoneIcon style={{ fontSize: '64px' }}></PhoneIcon>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <Typography variant="h5">Contact Us Now</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                +033 23 156987
                            </Typography>
                        </Grid>
                    </Typography>
                </Grid>

            </Grid>
        </Container >
    );
};

export default Information;




