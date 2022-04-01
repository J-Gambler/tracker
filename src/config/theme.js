import { createTheme, responsiveFontSizes  } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: {
            textTransform: 'initial',
        }
    }
})

export default responsiveFontSizes(theme);

