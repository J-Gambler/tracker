import * as React from 'react';
import WelcomeModal from './WelcomeModal';
import { Box } from '@mui/material';

export default function Welcome () {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <Box>
            <WelcomeModal 
                open={open} 
                handleClose={handleClose} 
            />
        </Box>
    );
}