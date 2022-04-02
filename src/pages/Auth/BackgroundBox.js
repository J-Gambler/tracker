import BackgroundImage from '../../assets/images/dark-bg.png';
import { Box } from '@mui/material';

const boxStyle = {
    flex: 1,
    backgroundImage: `url('${BackgroundImage}')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat'
}

export default function BackgroundBox () {
    return (
        <Box style={boxStyle}>
            
        </Box>
    );
}