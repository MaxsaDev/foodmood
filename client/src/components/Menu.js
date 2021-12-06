import React, {useContext} from 'react';
import {Box, IconButton} from "@mui/material";
import logoBlack from "../static/logo-black.png";
import logoWhite from "../static/logo-white.png";
import {useTheme} from "@mui/material/styles";
import {ColorModeContext} from '../App';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {HOME_ROUTE} from "../routes/const";
import {NavLink} from "react-router-dom";

export const Menu = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        // border: '1px blue solid',
        display: 'flex',
        // justifyContent: 'space-between',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box></Box>

      <NavLink to={HOME_ROUTE} rel="noreferrer">
        <img src={theme.palette.mode === 'dark' ? logoBlack : logoWhite} alt="logWhite"/>
      </NavLink>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};
