import { Link } from 'react-router-dom';
import {
    Box, 
    Button,
    Modal,
    Typography,
    Stack,
    FormControl,
    TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 680,
    bgcolor: 'background.paper',
    // boxShadow: 24,
    borderRadius: 7,
    p: 5,
    '& p': {
        textAlign: 'left',
    }
};

const lists = [
    'See your mints, buys, sells, transfers across multiple wallets all in one place',
    'See your net change in ETH across a single or set of wallets',
    'Input your starting investment and see your net profit and loss in ETH'
]
export default function LoginModal({ open, handleClose }) {
    const theme = useTheme();
    return (
        <Modal
            disableEnforceFocus 
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack alignItems="flex-end">
                    <CloseIcon />
                </Stack>
                <Stack gap={2}>
                    <Typography variant="h1">Login to Your Account</Typography>
                    <Typography>Welcome back! Please enter your login details below</Typography>
                </Stack>
                <Stack pt={6} flexDirection="column" gap={3}>
                    <FormControl>
                        <Typography 
                            textAlign="left"
                            fontFamily="PlusJakartaSansMedium"
                            pb={1}
                        >Email</Typography>
                        <TextField InputLabelProps={{ shrink: false }} placeholder="Email" />
                    </FormControl>
                    <FormControl>
                        <Typography 
                            textAlign="left"
                            fontFamily="PlusJakartaSansMedium"
                            pb={1}
                        >Password</Typography>
                        <TextField InputLabelProps={{ shrink: false }} placeholder="Password" />
                        <Typography 
                            textAlign="right !important" pt={1} textDecoration="none" color="#52525B">  
                            <Link to="/forget" style={{ textDecoration: 'none', color: '#52525B' }}>Forgot Password?</Link>
                        </Typography>
                    </FormControl>
                    <FormControl>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                bgcolor: theme.palette.common.black,
                                py: 2,
                                fontFamily: 'PlusJakartaSansExtraBold' 
                            }}
                        >Log In</Button>
                    </FormControl>
                    <Typography textAlign="center !important" color="#52525B">
                        Don't have an account? 
                        <Link 
                            to="/signup" 
                            style={{ 
                                textDecoration: 'none', 
                                color: '#000000', 
                                fontFamily: 'PlusJakartaSansExtraBold',
                            }}> Sign Up</Link>
                    </Typography>
                </Stack>
            </Box>
        </Modal>
    );
}
