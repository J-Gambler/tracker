import { IconButton, Typography, Stack } from "@mui/material";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export default function WalletBox (props) {
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
                {props.wallet}
            </Typography>
            <Stack flexDirection="row" gap={2.5}>
                <DeleteForeverOutlinedIcon />
            </Stack>
        </Stack>
    );
}