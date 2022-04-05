import { IconButton, Typography, Stack } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

export default function ProfileBox (props) {
    return (
        <Stack 
            sx={{
                py: 2,
                px: 2.5,
                flexDirection: "row" ,
                alignItems: "center",
                justifyContent: "space-between",
                border: '1px solid #D7DCE3',
                borderRadius: 2
            }}
        >
            <Typography>
                {props.name}
            </Typography>
            <Stack flexDirection="row" gap={2.5}>
                <BarChartOutlinedIcon />
                <AccountBalanceWalletOutlinedIcon />
                <DeleteForeverOutlinedIcon />
            </Stack>
        </Stack>
    );
}