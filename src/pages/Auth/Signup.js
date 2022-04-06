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

export default function Signup () {
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
                    <Typography variant="h1">Sign Up to Tallyup</Typography>
                    <Typography pt={2} px={7}>
                        See your mints, buys, sells, transfers across multiple wallets all in one place. 
                        Create a free account below.
                    </Typography>
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
                        <Typography textAlign="center" color="#52525B">
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