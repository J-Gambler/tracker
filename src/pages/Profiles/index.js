import { Box, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Wallets from './Wallets';
import Profiles from './Profiles';

export default function ProfilesPage () {
    const theme = useTheme();
    return (
        <Stack 
            borderRadius={2} 
            bgcolor={theme.palette.common.white}
            flexDirection="row"
        >
            <Profiles />
            <Divider orientation="vertical" flexItem />
            <Wallets />
        </Stack>
    );
}