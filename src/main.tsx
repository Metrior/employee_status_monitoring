import { createRoot } from 'react-dom/client'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { Provider } from 'react-redux';
import {store} from './store';
import App from './App.tsx'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#f0f0f0',
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
