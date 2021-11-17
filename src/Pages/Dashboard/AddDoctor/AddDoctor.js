import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://polar-island-19407.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard" />
                <br /> <br />
                <Input
                    accept="image/*"
                    sx={{ width: '50%' }}
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    add Doctor
                </Button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AddDoctor;