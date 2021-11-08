import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import Grid from '@mui/material/Grid';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';


const Reviews = () => {
    return (

        <Container sx={{ marginTop: '150px', marginBottom: '50px' }}>
            <Typography sx={{ color: 'primary.main' }} variant="h6" gutterBottom component="div">
                Testimonial
            </Typography>
            <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: '800', marginBottom: '50px' }}>What's Our Patients Says</Typography>

            <Grid container spacing={2} >

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        color: 'text.secondary',
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
                                textAlign: 'justify'
                            }}
                        >

                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="caption" gutterBottom sx={{ fontWeight: 500 }}>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                </Typography>
                            </Grid>

                        </Typography>

                        <Typography
                            component="div"
                            sx={{
                                p: 1,
                                bgcolor: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >

                            <Grid item xs={12} sm={12} md={6}>
                                <img
                                    style={{ width: '50px' }}
                                    src={people1} alt="" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 700 }} >
                                    Wilson Henry
                                </Typography>

                                <Typography variant="caption" gutterBottom>
                                    California
                                </Typography>
                            </Grid>

                        </Typography>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        color: 'text.secondary',
                        alignSelf: "center",
                        p: 3,
                    }}
                    style={{ height: "250px", }}
                >
                    <Typography sx={{ boxShadow: 3, }}>
                        <Typography
                            component="div"
                            sx={{
                                p: 3,
                                bgcolor: "white",
                                borderColor: 'text.primary',
                                textAlign: 'justify'
                            }}
                        >

                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="caption" gutterBottom sx={{ fontWeight: 500 }}>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                </Typography>
                            </Grid>
                        </Typography>

                        <Typography
                            component="div"
                            sx={{
                                p: 1,
                                bgcolor: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >

                            <Grid item xs={12} sm={12} md={6}>
                                <img
                                    style={{ width: '50px' }}
                                    src={people2} alt="" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 700 }} >
                                    Taylor Swift
                                </Typography>

                                <Typography variant="caption" gutterBottom>
                                    California
                                </Typography>
                            </Grid>

                        </Typography>
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4}
                    sx={{
                        color: 'text.secondary',
                        alignSelf: "center",
                        p: 3,
                    }}
                    style={{ height: "250px", }}
                >
                    <Typography sx={{ boxShadow: 3, }}>
                        <Typography
                            component="div"
                            sx={{
                                p: 3,
                                bgcolor: "white",
                                borderColor: 'text.primary',
                                textAlign: 'justify'
                            }}
                        >

                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="caption" gutterBottom sx={{ fontWeight: 500, }}>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                </Typography>
                            </Grid>
                        </Typography>

                        <Typography
                            component="div"
                            sx={{
                                p: 1,
                                bgcolor: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >

                            <Grid item xs={12} sm={12} md={6}>
                                <img
                                    style={{ width: '50px' }}
                                    src={people3} alt="" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 700 }} >
                                    Lara Croft
                                </Typography>

                                <Typography variant="caption" gutterBottom>
                                    California
                                </Typography>
                            </Grid>

                        </Typography>
                    </Typography>
                </Grid>

            </Grid>
        </Container>

    );
};

export default Reviews;