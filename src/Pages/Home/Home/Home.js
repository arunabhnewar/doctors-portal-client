import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import About from '../About/About';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Information from '../Information/Information';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Menubar />
            <Banner />
            <Information />
            <Services />
            <About />
            <AppointmentBanner />
            <Reviews />
            <Blog />
            <Contact />
        </div>
    );
};

export default Home;