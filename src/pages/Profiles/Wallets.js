import { useTheme } from "@mui/material/styles";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import WalletBox from "./WalletBox";

const profiles = [
    {
        wallet: '0xaeaaf3d4795f15356b78a88b235e55e471e157f0',
        status: 1,
    },
    {
        wallet: 'dba7efae728d2936e78bda97dc267687568dd593f3',
        status: 1,
    },
    {
        wallet: '000xdbA4059240340x94569eDFF0x900913456C',
        status: 1,
    }
]

export default function Wallets () {
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
            >Zima Wallets</Typography>
            <Stack gap={2} pt={4}>
                {
                profiles.map( (element, key) => 
                    <WalletBox {...element} key={key} />
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