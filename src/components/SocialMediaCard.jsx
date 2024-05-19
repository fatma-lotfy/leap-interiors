import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMediaCard = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Card sx={{ width: '100%', mx: 'auto', mt: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 2 }}>
          //hello
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, borderBottom: '1px solid #e0e0e0', py: 1 }}>
          <IconButton onClick={() => handleIconClick('https://www.facebook.com')}>
            <FacebookIcon sx={{ color: '#4267B2' }} />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>Facebook</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, borderBottom: '1px solid #e0e0e0', py: 1 }}>
          <IconButton onClick={() => handleIconClick('https://www.instagram.com')}>
            <InstagramIcon sx={{ color: '#E1306C' }} />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>Instagram</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
          <IconButton onClick={() => handleIconClick('https://www.whatsapp.com')}>
            <WhatsAppIcon sx={{ color: '#25D366' }} />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>WhatsApp</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
