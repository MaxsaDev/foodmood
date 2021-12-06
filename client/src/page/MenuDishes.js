import React, {useContext} from 'react';
import {databaseKawa, databaseHerbaty} from '../store/store'
import {
  List,
  Avatar,
  Box,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography, ListItemIcon, Divider, ListItemButton
} from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useTheme} from "@mui/material/styles";

import {ColorModeContext} from "../App";
import {HOME_ROUTE} from "../routes/const";
import {NavLink} from "react-router-dom";

export const MenuDishes = () => {
  const dataKawa = databaseKawa;
  const dataHerbaty = databaseHerbaty;

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);


  return (
    <>
      <Paper>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{marginBottom:'1.5rem'}}>
              <Box sx={{
                // border: '1px red solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '1.5rem 0 0'
              }}>
                <Avatar><CoffeeIcon/></Avatar>
                <Typography variant="h5" sx={{marginTop: '0.5rem'}}>Kawa</Typography>
              </Box>
              {/*<List dense={dense}>*/}
              <List>
                {
                  dataKawa.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={theme.palette.mode === 'dark' ? {borderBottom: 'thin #333333 solid'} : {borderBottom: 'thin #EEEEEE solid'}}
                      secondaryAction={
                        <Typography variant="h6">{item.price} zł.</Typography>
                      }
                    >
                      <ListItemIcon sx={{color: '#777777'}}><CoffeeIcon/></ListItemIcon>
                      <ListItemText
                        primary={item.name}
                        secondary={secondary ?
                          <Typography sx={{fontSize: 'small', color: '#777777'}}>{item.recipe}</Typography> : null}
                      />
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              marginTop: '0.5rem',
              marginRight: '0.5rem',
            }}
          >
            <NavLink to={HOME_ROUTE}><IconButton><ArrowBackIcon/></IconButton></NavLink>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{margin: '0.5rem 0'}}>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Grid container >
            <Grid item xs={12} sx={{marginBottom:'1.5rem'}}>
              <Box sx={{
                // border: '1px red solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '1.5rem 0 0'
              }}>
                <Avatar sx={{color: '#FEEE24'}}><EmojiFoodBeverageIcon/></Avatar>
                <Typography variant="h5" sx={{marginTop: '0.5rem'}}>Herbata</Typography>
              </Box>
              {/*<List dense={dense}>*/}
              <List>
                {
                  dataHerbaty.map((item, index) => (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <Typography variant="h6">{item.price} zł.</Typography>
                      }
                    >
                        <ListItemIcon sx={{color: '#777777'}}><EmojiFoodBeverageIcon/></ListItemIcon>
                        <ListItemText
                          primary={item.name}
                          secondary={secondary ?
                            <Typography sx={{fontSize: 'small', color: '#777777'}}>{item.recipe}</Typography> : null}
                        />
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              marginTop: '0.5rem',
              marginRight: '0.5rem',
            }}
          >
            <NavLink to={HOME_ROUTE}><IconButton><ArrowBackIcon/></IconButton></NavLink>
          </Box>
        </Box>
      </Paper>
    </>
  );
};