import React from 'react';
import { Typography, Container, Slide, Paper, Box } from '@mui/material';
import HeadShot from '../static/images/frosty-head-shot.jpeg';
import { display } from '@mui/system';
import './Home.css';

function Home() {
    return (
        <Container maxWidth="sm">
            <div style={{ textAlign: 'center' }}>
                <Slide direction="left" timeout={1000} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h4" component="div" gutterBottom>
                        Wilburn George "Frosty" Davis
                    </Typography>
                </Slide>
                <Slide direction="right" timeout={1000} in={true} mountOnEnter unmountOnExit>
                    <Typography variant="h5" component="div" gutterBottom>
                        1940 - 2021
                    </Typography>
                </Slide>
            </div>
            <div className="home-image-content">
                <Box className={'home-image-box'} component="img" alt="Frosty Headshot" src={HeadShot} />
            </div>
        </Container>
    );
}

export default Home;
