import { createTheme, responsiveFontSizes  } from '@mui/material/styles';

const theme = createTheme({
    root: {
        backgroundColor: '#FFFFFF',
    },
    palette: {
        // mode: 'dark',
        primary: {
            main: '#000',
            dark: '#616161',
            light: '#bdbdbd',
        },
        secondary: {
            main: '#FFF',
            dark: '#616161',
            light: '#bdbdbd',
            contrastText: '#000',
        }
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
            fontSize: 35,
            fontFamily: 'PlusJakartaSansExtraBold'
        },
        h2: {
            color: '#18181B',
            fontSize: 30,
            fontFamily: 'PlusJakartaSansBold'
        },
        h3: {
            color: '#9DA7B5',
            fontSize: 30,
            fontFamily: 'PlusJakartaSansBold'
        },
        h4: {
            color: '#18181B',
            fontSize: 25,
            fontFamily: 'PlusJakartaSansBold'
        },
        subtitle1: {
            color: '#52525B',
            fontSize: 20,
            fontFamily: 'PlusJakartaSansBold',
        },
        subtitle2: {
            color: '#52525B',
            fontSize: 18,
            fontFamily: 'PlusJakartaSansBold',
        },
        body1: {
            color: '#52525B',
            fontSize: 18,
            fontFamily: 'PlusJakartaSansMedium'
        },
        caption: {
            color: '#18181B',
            fontSize: 17,
            fontFamily: 'PlusJakartaSansExtraBold'
        },
        overline: {
            color: '#9DA7B5',
            fontSize: 13,
            fontFamily: 'PlusJakartaSansMedium'
        },
        button: {
            fontSize: 16,
            fontFamily: 'PlusJakartaSansExtraBold',
            textTransform: 'initial'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    paddingLeft: 45,
                    paddingRight: 45,
                    paddingTop: 16,
                    paddingBottom: 16
                }
            }
        }
    }
})

export default responsiveFontSizes(createTheme(theme));

