import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {blue, grey} from '@mui/material/colors';

import App from './App.tsx'
import {store} from './store';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: grey[50],
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </Provider>
)
