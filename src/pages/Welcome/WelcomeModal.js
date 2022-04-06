import {
    Avatar,
    Box, 
    Button,
    Modal,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HandImage from '../../assets/images/icn.png';
import HandPointerImage from '../../assets/images/handpointer.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 770,
    bgcolor: 'background.paper',
    // boxShadow: 24,
    borderRadius: 7,
    p: 5,
    '& p, h1, h6': {
        textAlign: 'center',
    }
};

const lists = [
    'See your mints, buys, sells, transfers across multiple wallets all in one place',
    'See your net change in ETH across a single or set of wallets',
    'Input your starting investment and see your net profit and loss in ETH'
]
export default function WelcomeModal({ open, handleClose }) {
    const theme = useTheme();
    return (
        <Modal
            disableEnforceFocus 
            open={open}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack alignItems="center" sx={{ pb: 2 }}>
                    <Avatar sx={{ width: 120, height: 120 }} src={HandImage} />
                </Stack>
                <Stack gap={2}>
                    <Typography variant="h1">Hey, welcome to Tallyup!</Typography>
                    <Typography variant="body1">A simple tool to help you make sense of your NFT and ETH transactions.</Typography>
                </Stack>
                <Box sx={{ pt: 4, pb: 5 }}>
                    <Typography variant="subtitle1">We make it easy for you to:</Typography>
                    <List 
                        sx={{
                            pb: 4,
                            pt: 2
                        }}
                    >
                        {lists.map((element, key) => 
                        <ListItem key={key} sx={{ p: 0 }}>
                            <ListItemAvatar>
                                <Avatar src={HandPointerImage} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={
                                    <Typography 
                                        variant="body1"
                                        sx={{
                                            textAlign: 'left !important'
                                        }}
                                    >{element}
                                    </Typography>
                                }></ListItemText>
                        </ListItem>
                        )}
                    </List>
                    <Typography variant="subtitle2">And, that's just the beginning... Getting started is easy (and free)!</Typography>
                </Box>
                <Stack alignItems="center">
                    <Button variant="contained" color="primary"
                        // sx={{
                        //     px: 6,
                        //     py: 2,
                        //     bgcolor: theme.palette.common.black,
                        //     color: theme.palette.common.white,
                        //     borderRadius: 2
                        // }}
                    >Get Started</Button>
                </Stack>
            </Box>
        </Modal>
    );
}
