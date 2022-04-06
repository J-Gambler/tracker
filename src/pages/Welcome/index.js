import * as React from 'react';
import WelcomeModal from './WelcomeModal';
import { Box } from '@mui/material';
import LoginModal from '../Auth/LoginModal';
import SignupModal from '../Auth/SignupModal';
import BackgroungImage from '../../assets/images/dark-bg.png';

export default function Welcome () {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: '#19171e',
                height: '100%',
                backgroundImage: `url(${BackgroungImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                backgroundPosition: 'top center'
            }}
        >
            {/* <WelcomeModal 
                open={open} 
                handleClose={handleClose} 
            /> */}
            
            {/* <SignupModal 
                open={open} 
                handleClose={handleClose} 
            /> */}
        </Box>
    );
}