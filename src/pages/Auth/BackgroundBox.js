import BackgroundImage from '../../assets/images/dark-bg.png';
import { Box, Button, Stack, Typography, CardHeader, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Avatar1Image from '../../assets/images/avatar/avatar1.png';

const boxStyle = {
    flex: 1,
    backgroundImage: `url('${BackgroundImage}')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat'
}

export default function BackgroundBox () {
    const theme = useTheme();

    return (
        <Box style={boxStyle}>
            <Stack 
                flexDirection="row" 
                justifyContent="flex-end" 
                py={3} 
                px={7.5}
                alignItems="center"
                gap={3}
            >
                <Link to="login/" style={{ textDecoration: 'none', fontFamily: 'PlusJakartaSans', color: theme.palette.background.default }}>Sign Up</Link>
                <Button variant="outlined"
                    sx={{ 
                        borderColor: theme.palette.background.default,
                        color: theme.palette.background.default,
                        py: 1.5,
                        px: 5
                    }}
                >Contact</Button>
            </Stack>
            <Box pt={65}></Box>
            <Box
                borderRadius={3}
                bgcolor="#262133"
                px={8}
                py={6}
                maxWidth={500}
                m="auto"
            >
                <Typography 
                    fontSize={20}
                    fontFamily="PlusJakartaSansMedium"
                    color="#FFFFFF"
                >
                    "Tallyup is very easy and convenient to use.<br />
                    Set up your crypto profiles and wallets in seconds! 
                    One of the best NFT portfolio tracker today!"
                </Typography>
                <CardHeader
                    avatar={
                        <Avatar sx={{ mr: 0 }} src={Avatar1Image} aria-label="recipe" />
                    }
                    title={
                        <Typography 
                            color="#FFFFFF"
                            fontFamily="PlusJakartaSansBold"
                            fontSize={18}
                            textAlign="left"
                        >Anna River</Typography>
                    }
                    subheader={
                        <Typography
                            color="#888888"
                            fontSize={15}
                            textAlign="left"
                        >Crypto Investor</Typography>
                    }
                    sx={{
                        pt: 3.5,
                        maxWidth: 200,
                        m: 'auto',
                    }}
                />
            </Box>
        </Box>
    );
}