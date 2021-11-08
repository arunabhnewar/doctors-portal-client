import React from 'react';
import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import bg from '../../../images/appointment-bg.png'

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
            padding: '30px'
        },
        textArea: {
            border: 0,
            outline: 0,
            width: '100%',
            margin: '20px 0',
            borderRadius: 3,
            fontFamily: 'inherit',
            padding: 15
        }
    })
    const { root, textArea } = useStyle()
    return (
        <div style={{ marginTop: '150px' }} className={root}>
            <Container maxWidth="md">
                <Typography variant="h6" color="#19D3AE">Contact us</Typography>
                <Typography variant="h4" color="#fff">Always connect with us</Typography>
                <TextField
                    fullWidth
                    placeholder="Email"
                    margin="normal"
                    required
                    sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                />
                <TextField
                    fullWidth
                    placeholder="Subject"
                    margin="normal"
                    required
                    sx={{ backgroundColor: '#fff', borderRadius: 1 }}
                />
                <textarea rows={10} className={textArea} placeholder="Your Message"></textarea>
                <Button sx={{ width: 1, m: 1 }} variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Submit</Button>
            </Container>
        </div>
    );
};

export default Contact;