import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';

const Blog = () => {
    return (
        <Container sx={{ marginTop: '150px', marginBottom: '50px' }}>
            <Typography sx={{ color: 'primary.main' }} variant="h6" gutterBottom component="div">
                Our Blog
            </Typography>
            <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: '800', marginBottom: '50px' }}>From Our Blog News</Typography>

            <Grid container spacing={2} >

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        color: 'white',
                        alignSelf: "center",
                        p: 3,

                    }}
                    style={{ height: "250px", }}
                >
                    <Typography sx={{
                        boxShadow: 3,
                    }}>
                        <Typography
                            component="div"
                            sx={{
                                p: 3,
                                bgcolor: "#19D3AE",
                                borderColor: 'text.primary',
                                textAlign: 'justify'
                            }}
                        >

                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Rashed Kabir
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    22 Oct 2021
                                </Typography>
                            </Grid>
                        </Typography>

                        <Typography
                            component="div"
                            sx={{
                                p: 3,
                                bgcolor: "#19D3AE",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, textAlign: 'left' }} >
                                    Check al least a doctor in a year for your teeth
                                    <br />
                                    <ArrowRightAltIcon sx={{ color: 'white', fontSize: '42px', textAlign: 'left' }} ></ArrowRightAltIcon>
                                </Typography>
                            </Grid>

                        </Typography>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        color: 'text.primary',
                        alignSelf: "center",
                        p: 3,

                    }}
                    style={{ height: "250px", }}
                >
                    <Typography sx={{
                        boxShadow: 3,
                    }}>
                        <Typography
                            component="div"
                            sx={{
                                p: 3,
                                bgcolor: "white",
                                borderColor: 'text.primary',
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={6}>
                                <img
                                    style={{ width: '50px' }}
                                    src={people1} alt="" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>

                                <Typography variant="h6" gutterBottom component="div">
                                    Dr. Claudi
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="div" sx={{ color: 'text.secondary' }}>
                                    22 Oct 2021
                                </Typography>
                            </Grid>
                        </Typography>

                        <Typography
                            component="div"
                            sx={{
                                p: 2,
                                bgcolor: "white",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, textAlign: 'left' }} >
                                    2 times of brush in a day can keep you healthy
                                </Typography>
                                <br />
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, textAlign: 'left' }} >
                                    It is a long establishment fact that by the readable content of a lot layout The point.
                                </Typography>
                            </Grid>

                        </Typography>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        color: 'text.primary',
                        alignSelf: "center",
                        p: 3,

                    }}
                    style={{ height: "250px", }}
                >
                    <Typography sx={{
                        boxShadow: 3,
                    }}>
                        <Typography
                            component="div"
                            sx={{
                                p: 3,
                                bgcolor: "white",
                                borderColor: 'text.primary',
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={6}>
                                <img
                                    style={{ width: '50px' }}
                                    src={people2} alt="" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>

                                <Typography variant="h6" gutterBottom component="div">
                                    Dr. Samantha
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom component="div" sx={{ color: 'text.secondary' }}>
                                    29 Oct 2021
                                </Typography>
                            </Grid>
                        </Typography>

                        <Typography
                            component="div"
                            sx={{
                                p: 2,
                                bgcolor: "white",
                            }}
                        >
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, textAlign: 'left' }} >
                                    The tooth cancer is taking a challenge
                                </Typography>
                                <br />
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 500, textAlign: 'left' }} >
                                    It is a long establishment fact that by the readable content of a lot layout The point.
                                </Typography>
                            </Grid>

                        </Typography>
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Blog;