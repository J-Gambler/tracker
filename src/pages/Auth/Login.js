import LogoImage from '../../assets/images/Tallyup.svg';
import BackgroundBox from './BackgroundBox';
import { styled } from '@mui/material/styles';
import {
    Stack, Box, Typography
} from '@mui/material';

const Image = styled('img')({
    width: '100%'
})

export default function Login () {
    return (
        <Stack flexDirection="row" minHeight="100vh" height="100%">
            <Box flex={1}>
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
            </Box>
            <BackgroundBox />
        </Stack>
    );
}