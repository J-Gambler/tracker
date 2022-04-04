import BackgroundImage from '../../assets/images/dark-bg.png';
import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

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
        </Box>
    );
}