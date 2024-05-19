import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import * as Constants from '../../assets/Constants'

const SocialMediaCard = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this website',
        url: window.location.href,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Sharing not supported in this browser.');
    }
  };

  return (
    <Card sx={{ width: '100%', mx: 'auto' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, borderBottom: '1px solid #e0e0e0', py: 1 }} onClick={() => handleIconClick(Constants.faceBookLink)}>
          <IconButton >
            <FacebookIcon sx={{ color: '#4267B2' }} />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>Facebook</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, borderBottom: '1px solid #e0e0e0', py: 1 }} onClick={() => handleIconClick(Constants.instagramLink)}>
          <IconButton>
            <InstagramIcon sx={{ color: '#E1306C' }} />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>Instagram</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }} onClick={() => handleIconClick(Constants.whatsAppLink)}>
          <IconButton >
            <WhatsAppIcon sx={{ color: '#25D366' }} />
          </IconButton>
          <Typography variant="body1" sx={{ ml: 1 }}>WhatsApp</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
        <IconButton
        onClick={handleShareClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: 3,
          '&:hover': {
            backgroundColor: 'lightgray',
          },
        }}
      >
        <ShareIcon sx={{ color: '#000' }} />
      </IconButton>
        </Box>
    </CardContent>
    </Card >
  );
};

export default SocialMediaCard;
