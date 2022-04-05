import { useTheme } from "@mui/material/styles";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import ProfileBox from './ProfileBox';
import AddIcon from '@mui/icons-material/Add';

const profiles = [
    {
        name: 'Zima',
        status: 1,
    },
    {
        name: 'Fund Wallet',
        status: 1,
    }
]

export default function Profiles () {
    const theme = useTheme();

    return (
        <Box py={6} px={6.5} flex={1} >
            <Typography
                sx={{
                    fontSize: 30,
                    fontFamily: 'PlusJakartaSansBold',
                    color: '#18181B',
                    textAlign: 'left'
                }}
            >Profiles</Typography>
            <Stack gap={2} pt={4}>
                {
                profiles.map( (element, key) => 
                    <ProfileBox {...element} key={key} />
                )}
                <Stack
                    sx={{
                        borderRadius: 2,
                        border: '1px dashed #C9C9C9',
                        bgcolor: '#fafafa',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 1.5
                    }}
                >
                    <IconButton sx={{ bgcolor: theme.palette.common.white }}>
                        <AddIcon fontSize="medium" />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
}