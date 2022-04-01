import * as React from 'react';
import { styled } from '@mui/material/styles';
import { 
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoImage from '../assets/images/Tallyup.svg';

const Image = styled('img')({
    width: '100%'
})

const Header = () => {
  const onContact = () => {

  }

  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <Image src={LogoImage} />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <Button
                        onClick={onContact}
                    >Contact</Button>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <Image src={LogoImage} />
                </Typography>

                <Box sx={{ flexGrow: 0 }}>
                    <Button onClick={onContact} variant="outlined">Contact</Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
};
export default Header;
