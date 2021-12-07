import React from 'react';
import {Box, Button, Paper} from "@mui/material";
import BackgroundImage from '../static/cook4.jpg';
import Link from "@mui/material/Link";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MenuItem1 from '../files/menu1.pdf';
import MenuItem2 from '../files/menu2.pdf';
import MenuItem3 from '../files/menu3.pdf';
import MenuItem4 from '../files/menu1.pdf';
import {NavLink} from "react-router-dom";
import {MUNUDISHES_ROUTE} from "../routes/const";

const Home = () => {
  return (
    <Paper
      sx={{
        // border: '1px red solid',
        width: '100%',
        // height: '100%',
        height: '80vh',
        background: `no-repeat url(${BackgroundImage})`,
        backgroundSize: 'cover',

      }}
    >
      <Box
        sx={{
          // border: '1px solid red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <Box
          sx={{
            border: '1px solid white',
            // borderRadius: '0.3rem',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',

            width: '100%',
            height: '100%',
            // margin: '0 0.5rem',
            paddingBottom: '1rem',
          }}

        >
          <NavLink to={MUNUDISHES_ROUTE} sx={{textDecoration: 'none'}}>
            <Button
              sx={{
                // border: '1px green solid',
                margin: '0.25rem 0',
                width: '250px',
                color: 'white',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.15)'

              }}
              size="large"
            >
              Menu Głowne
            </Button>
          </NavLink>

          <NavLink to={MUNUDISHES_ROUTE} sx={{textDecoration: 'none'}}>
            <Button
              sx={{
                // border: '1px green solid',
                margin: '0.25rem 0',
                width: '250px',
                color: 'white',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
              size="large"
            >
              Zdrowe Jedzenie
            </Button>
          </NavLink>

          <NavLink to={MUNUDISHES_ROUTE} sx={{textDecoration: 'none'}}>
            <Button
              sx={{
                // border: '1px green solid',
                margin: '0.25rem 0',
                width: '250px',
                color: 'white',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
              size="large"
            >
              Śniadania
            </Button>
          </NavLink>

          <NavLink to={MUNUDISHES_ROUTE} sx={{textDecoration: 'none'}}>
            <Button
              sx={{
                // border: '1px green solid',
                margin: '0.25rem 0',
                width: '250px',
                color: 'white',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
              size="large"
            >
              Napoje
            </Button>
          </NavLink>


          <Link href={'tel:+48000000000'} sx={{textDecoration: 'none'}}>
            <Button
              startIcon={<PhoneInTalkIcon/>}
              sx={{
                // border: '1px green solid',
                margin: '0.25rem 0',
                width: '250px',
                color: 'white',
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.4)'
              }}
              size="large"
            >
              Zamów
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default Home;