import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import logo from '../../assets/logo.webp'; 

function AppHeader() {
 // const classes = useStyles();

  return (
    <>
    <Card>
    <CardMedia
      component="img"
      alt="leap img"
       height="250"
      image={logo}
    />
    </Card>
 
  </>
  );
}

export default AppHeader;
