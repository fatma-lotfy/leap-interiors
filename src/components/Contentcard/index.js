import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ContentCard() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Card sx={{marginTop:'15px',justifyContent:'flex-start'}}>
    <CardContent>
        <Typography gutterBottom variant="h6" component="div" >
          Connect with us on social media
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Follow us and get updates delievered to your favorite 
        social media channel.
        </Typography>
      </CardContent>
    </Card>
    </ThemeProvider>
  );
}

export default ContentCard;