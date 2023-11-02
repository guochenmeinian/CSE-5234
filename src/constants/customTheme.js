import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#f5b921',
            contrastText: '#fff',
        },
        secondary: {
            main: '#333',
        }
    },
    typography: {
        h4: {
            fontSize: '1.5rem',
        },
        h5: {
            fontSize: '1.5rem',
        },
        h6: {
            fontSize: '1.5rem',
        },
        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '1rem',
        },
        overline: {
            fontSize: '0.875rem',
        }
    }
});

export default customTheme;