import * as React from 'react';
import { 
    Box, 
    Chip,
    CardMedia,
    Stack, 
    Tabs, 
    Tab, 
    ToggleButton,
    ToggleButtonGroup,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import DashboardCard from "./DashboardCard";
import PageHeader from "./PageHeader";
import DashboardImage from '../../assets/images/Mask Group 2.png';
import Nft1Image from '../../assets/images/nfts/1.png';
import NftCard from './NftCard';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box>
                {children}
            </Box>
        )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const dashboards = [
    {
        title: 'Starting Balance',
        background: DashboardImage,
        ether: '0.365799',
        price: '1200.00',
    },
    {
        title: 'ETH Inflow',
        ether: '20.58013',
        price: '70118.15',
    },
    {
        title: 'ETH Outflow',
        ether: '15.330128',
        price: '70118.15',
    },
    {
        title: 'Change in ETH',
        ether: '5.250002',
        price: '17887.18',
    },
]

const tabs = [
    { title: 'All' },
    { title: 'Mints' },
    { title: 'Buys' },
    { title: 'Sells' },
    { title: 'Transfers' },
    { title: 'Misc' },
]

const nfts = [
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    },
    {
        title: '',
    }
]

export default function Profile () {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [formats, setFormats] = React.useState('card');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Box
            sx={{
                py: 6,
                pb: 9,
                px: 6.5,
                borderRadius: 2,
                bgcolor: 'background.paper'
            }}
        >
            <PageHeader />
            <Stack flexDirection="row" gap={2.5} pt={4}>
            { dashboards.map( (element, key) => 
                <DashboardCard key={key} {...element} />
            )}
            </Stack>
            <Box sx={{ width: '100%', pt: 9 }}>
                <Stack 
                    flexDirection="row"
                    justifyContent="space-between"
                    sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {tabs.map( (element, key) => 
                            <Tab label={element.title} {...a11yProps(key)} key={key} />
                        )}
                    </Tabs>
                    <ToggleButtonGroup
                        sx={{
                            pb: 2,
                        }}
                        value={formats}
                        exclusive
                        onChange={handleFormat}
                        aria-label="text formatting"
                    >
                        <ToggleButton value="card" aria-label="card">
                            <WindowIcon />
                        </ToggleButton>
                        <ToggleButton value="list" aria-label="list">
                            <MenuIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <TabPanel value={value} index={0} >
                {formats == 'card' 
                ?
                    <Stack flexDirection="row" pt={4} gap={6} justifyContent="space-between">
                    {nfts.map((e, k) => 
                        <NftCard key={k} />
                    ) }
                    </Stack>
                :
                    <TableContainer component={Paper} sx={{ border: 0, boxShadow: 'none' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow 
                                    sx={{ 
                                        '& td, th': { 
                                            fontFamily: 'PlusJakartaSansMedium', 
                                            border: 0, 
                                            fontSize: 15, 
                                            color: '#9DA7B5' 
                                        } 
                                    }}
                                >
                                    <TableCell>NFT</TableCell>
                                    <TableCell>ITEM</TableCell>
                                    <TableCell>COLLECTION</TableCell>
                                    <TableCell>TYPE</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>FROM</TableCell>
                                    <TableCell>TO</TableCell>
                                    <TableCell>MINT PRICE</TableCell>
                                    <TableCell>GAS PRICE</TableCell>
                                    <TableCell>ROYALTIES</TableCell>
                                    <TableCell>PLATFORM FEES</TableCell>
                                    <TableCell>TOTAL PRICE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {nfts.map((element, key) => (
                                <TableRow
                                    key={key}
                                    sx={{ '& td, th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <CardMedia
                                            component="img"
                                            image={Nft1Image}
                                            alt="Paella dish"
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 2
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>Unbothered Penguin #2145</TableCell>
                                    <TableCell>Penguins UItd. #1</TableCell>
                                    <TableCell><Chip label="Mint" /></TableCell>
                                    <TableCell>2021-11-26 02:02:02</TableCell>
                                    <TableCell>0x343adb...e0c1</TableCell>
                                    <TableCell>1eb0fx54...0xe7</TableCell>
                                    <TableCell>0.25 ETH</TableCell>
                                    <TableCell>0.02345345 ETH</TableCell>
                                    <TableCell>.02 ETH</TableCell>
                                    <TableCell>.03 ETH</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                </TabPanel>
            </Box>
        </Box>
    )
}