import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png';

const About = () => {
    return (
        <Container sx={{ marginTop: '200px' }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '330px' }}
                        src={treatment} alt="" />
                </Grid>

                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}
                >
                    <Box>
                        <Typography variant="h4" style={{ fontWeight: 800 }} sx={{ color: 'text.secondary' }}>
                            Exceptional Dental Care, on Your Terms
                        </Typography>

                        <Typography variant="subtitle2" sx={{ my: 5, color: 'text.disabled', }} style={{ fontSize: 14, fontWeight: 500 }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using Lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page.
                        </Typography>

                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;