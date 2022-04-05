import { Box, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Wallets from './Wallets';
import Profiles from './Profiles';

export default function ProfilesPage () {
    const theme = useTheme();
    return (
        <Stack 
            borderRadius={16} 
            bgcolor={theme.palette.common.white}
            flexDirection="row"
        >
            <Profiles />
            <Divider />
            <Wallets />
        </Stack>
    );
}