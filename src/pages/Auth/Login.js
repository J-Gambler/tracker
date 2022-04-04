import LogoImage from '../../assets/images/Tallyup.svg';
import BackgroundBox from './BackgroundBox';
import { alpha, styled } from '@mui/material/styles';
import {
    Stack, Box, Typography, InputBase, InputLabel, FormControl, FormControlLabel, Button, useTheme, TextField
} from '@mui/material';
import { Link } from 'react-router-dom';

const Image = styled('img')({
    width: '100%'
})

export default function Login () {
    const theme = useTheme();

    return (
        <Stack flexDirection="row" minHeight="100vh" height="100%">
            <Box flex={1} position="relative">
                <Stack flexDirection="row" py={3} px={7.5}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <Image src={LogoImage} />
                    </Typography>
                </Stack>
                <Box pt={16} maxWidth={584} m="auto">
                    <Typography variant="h1">Login to Your Account</Typography>
                    <Typography pt={2}>Welcome back! Please enter your login details below</Typography>
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
                                textAlign="right" pt={1} textDecoration="none" color="#52525B">  
                                <Link to="/forget" style={{ textDecoration: 'none', color: '#52525B' }}>Forgot Password?</Link>
                            </Typography>
                        </FormControl>
                        <FormControl>
                            <Button variant="contained" sx={{ bgcolor: theme.palette.common.black }}>Log In</Button>
                        </FormControl>
                        <Typography textAlign="center" color="#52525B">
                            Don't have an account? 
                            <Link 
                                to="signup" 
                                style={{ 
                                    textDecoration: 'none', 
                                    color: '#000000', 
                                    fontFamily: 'PlusJakartaSansExtraBold',
                                }}> Sign Up</Link>
                        </Typography>
                    </Stack>
                </Box>
                <Typography
                    component="caption"
                    sx={{
                        position: 'absolute',
                        bottom: 24,
                        width: '100%',
                        textAlign: 'center',
                        color: '#9DA7B5',
                        fontFamily: 'PlusJakartaSansBold',
                        textTransform: 'uppercase',
                        letterSpacing: 2.4
                    }}
                >BUILT BY @ZIMA16B8F3</Typography>
            </Box>
            <BackgroundBox />
        </Stack>
    );
}