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
        fontFamily: 'PlusJakartaSans',
        button: {
            textTransform: 'initial',
        }
    }
})

export default responsiveFontSizes(theme);

