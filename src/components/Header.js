import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { 
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    useMediaQuery
} from '@mui/material';
import LogoImage from '../assets/images/Tallyup.svg';

const Image = styled('img')({
    width: '100%'
})
const Header = () => {

    const theme = useTheme();
    const matchesUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const onContact = () => {

    }

    return (
        <AppBar position="fixed" 
            sx={{ 
                bgcolor: theme.palette.background.default,
                boxShadow: 'none'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', py:3, px:4.5 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        // sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        <Image src={LogoImage}
                            sx={{
                                width: matchesUpMd ? 150 : 110,
                            }}
                        />
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Button
                            onClick={onContact}
                        >Contact</Button>
                    </Box> */}
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Image src={LogoImage} 
                            sx={{
                                width: matchesUpMd ? 150 : 110,
                            }}
                        />
                    </Typography> */}

                    <Box 
                        // sx={{ 
                            // flex: 1, 
                            // display: { xs: 'none', md: 'flex' } 
                        // }}
                    >
                        <Button 
                            onClick={onContact} 
                            variant="outlined"
                            // color="secondary"
                        >Contact</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
