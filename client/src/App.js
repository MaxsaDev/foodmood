import React, {useMemo, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Container, CssBaseline, Typography} from "@mui/material";
import {AppRoutes} from "./components/AppRoutes";
import Link from '@mui/material/Link';

import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Menu} from "./components/Menu";


export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
  }
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://foodmood.cafe/" target='_blank'>
        Food Mood Cafe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function App() {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <BrowserRouter>
            <Container maxWidth={'md'}>
              <Menu/>
              <AppRoutes isAuth={false}/>
              <Copyright sx={{ mt: 2, mb: 4 }} />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}


