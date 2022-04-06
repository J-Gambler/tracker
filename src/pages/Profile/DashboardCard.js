import { useTheme } from "@mui/material/styles";
import { Box, CardHeader, Avatar, Typography, Divider } from '@mui/material';
import EthereumImage from '../../assets/images/ethereum.png';

export default function DashboardCard (props) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundSize: '100% 100%',
                backgroundImage: props.background ? `url(${props.background})` : 'unset',
                bgcolor: props.background ? '#18181b' : theme.palette.common.white,
                borderRadius: 3,
                border: '1px solid #D7DCE3',
                flex: '0 0 20%',
                justifyContent: 'flex-start'
            }}
        >
            <CardHeader
                sx={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    px: 4,
                    pt: 3,
                    pb: 2,
                    gap: 3,
                    '& .MuiCardHeader-avatar' : {
                        mr: 0
                    }
                }}
                avatar={
                    props.background 
                    ?   <Avatar sx={{ width:64, height: 64 }} src={EthereumImage} />
                    :   <></>
                }
                title={
                    <Typography
                        sx={{
                            textAlign: 'left',
                            color: '#99999C',
                        }}
                    >{props.title}</Typography>
                }
                subheader={
                    <Typography
                        sx={{
                            fontSize: 25, 
                            fontFamily: 'PlusJakartaSansBold',
                            textAlign: 'left',
                            pt: 1,
                            color: props.background ? theme.palette.common.white
                                                        : theme.palette.common.black
                        }}
                    >{props.ether} ETH
                    </Typography>
                }
            />
            <Divider />
            <Typography 
                sx={{ 
                    textAlign: 'left', 
                    pl: 4,
                    py: 1,
                    color: props.background ? theme.palette.common.white
                                                : theme.palette.common.black
                }}>${props.price}</Typography>
        </Box>
    );
}