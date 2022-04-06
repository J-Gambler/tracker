import { 
    Box, 
    Stack, 
    Tabs, 
    Tab, 
    Typography,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import DashboardCard from "./DashboardCard";
import PageHeader from "./PageHeader";
import DashboardImage from '../../assets/images/Mask Group 2.png';
import * as React from 'react';
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
    const [formats, setFormats] = React.useState('bold');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Box
            py={6} 
            pb={9}
            px={6.5}
            borderRadius={2} 
            bgcolor={theme.palette.common.white}
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
                    // alignItems="flex-start"
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
                        <ToggleButton value="bold" aria-label="bold">
                            <WindowIcon />
                        </ToggleButton>
                        <ToggleButton value="italic" aria-label="italic">
                            <MenuIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <TabPanel value={value} index={0} >
                    <Stack flexDirection="row" pt={4} gap={6} justifyContent="space-between">
                    {nfts.map((e, k) => 
                        <NftCard key={k} />
                    ) }
                    </Stack>
                </TabPanel>
                {/* <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel> */}
            </Box>
        </Box>
    )
}