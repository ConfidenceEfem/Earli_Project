import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function NotIcon() {

    
const styles = theme => ({
    badge: {
      
      background: `radial-gradient(circle at center, red 0, blue, green 100%)`
    },
  });

  return (
    <Badge badgeContent={4} color="#FF0000">
      <MailIcon color="action" />
    </Badge>
  );
}