import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from "react-redux";
import {store} from "./app/store";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1290,
            xl: 1536,
        }
    },
    typography: {
        allVariants: {
            fontFamily: 'Montserrat',
        },
    },
});

root.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Provider store={store}>
                <React.StrictMode>
                    <Routes>
                        <Route element={<Home/>} path="/" />
                        <Route element={<ArticlePage/>} path="/article/:id" />
                    </Routes>
                </React.StrictMode>
            </Provider>
        </Router>
    </ThemeProvider>
);
