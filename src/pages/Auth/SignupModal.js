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
export default function SignupModal({ open, handleClose }) {
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
                    <Typography variant="h1">Want to save your profile settings?</Typography>
                    <Typography>
                        Create a free account below.
                    </Typography>
                </Stack>
                <Stack pt={6} flexDirection="column" gap={3}>
                    <FormControl>
                        <Typography 
                            textAlign="left"
                            fontFamily="PlusJakartaSansMedium"
                            pb={1}
                        >Name</Typography>
                        <TextField InputLabelProps={{ shrink: false }} placeholder="Enter your name" />
                    </FormControl>
                    <FormControl>
                        <Typography 
                            textAlign="left"
                            fontFamily="PlusJakartaSansMedium"
                            pb={1}
                        >Email</Typography>
                        <TextField InputLabelProps={{ shrink: false }} placeholder="Email address" />
                    </FormControl>
                    <FormControl>
                        <Typography 
                            textAlign="left"
                            fontFamily="PlusJakartaSansMedium"
                            pb={1}
                        >Password</Typography>
                        <TextField InputLabelProps={{ shrink: false }} placeholder="Password" />
                        <Typography
                            textAlign="left"
                            color="#9DA7B5"
                            fontFamily="PlusJakartaSansMedium"
                            pt={1}
                        >Must be at least 8 characters</Typography>
                    </FormControl>
                    <FormControl>
                        <Button 
                            variant="contained"
                            sx={{ 
                                bgcolor: theme.palette.common.black,
                                py: 2,
                                fontFamily: 'PlusJakartaSansExtraBold' 
                            }}
                        >Create Account</Button>
                    </FormControl>
                    <Typography textAlign="center !important" color="#52525B">
                        Already have an account?
                        <Link 
                            to="/login" 
                            style={{ 
                                textDecoration: 'none', 
                                color: '#000000', 
                                fontFamily: 'PlusJakartaSansExtraBold',
                            }}> Log in</Link>
                    </Typography>
                </Stack>
            </Box>
        </Modal>
    );
}
