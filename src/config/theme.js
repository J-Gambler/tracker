import { createTheme, responsiveFontSizes  } from '@mui/material/styles';

const theme = createTheme({
    root: {
        backgroundColor: '#FFFFFF',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1440,
            xl: 1920,
        },
    },
    typography: {
        color: '#18181B',
        fontFamily: 'PlusJakartaSans',
        // fontSize: 18,

        h1: {
            color: '#18181B',
            fontSize: 36,
            fontFamily: 'PlusJakartaSansExtraBold'
        },
        button: {
            fontSize: 16,
            textTransform: 'initial',
        }
    }
})

export default responsiveFontSizes(theme);

