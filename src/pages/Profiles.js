import { Box, Container, Stack, TextField, Typography } from "@mui/material"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Profiles = () => {
    return (
        <Container>
            <Box sx={{ py: 5 }}>
                <Typography fontSize={48} fontWeight={700} >Profiles</Typography>
            </Box>
            <Stack>
                <Stack flexDirection="row">
                    <TextField label="Profile..." />
                </Stack>
            </Stack>
        </Container>
    )
}

export default Profiles;