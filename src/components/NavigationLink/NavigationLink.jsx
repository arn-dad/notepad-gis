import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';

// @TODO change inline styles to className

const NavigationLink = ({ label, to, Icon }) => {
  return (
    <ListItem style={{ color: '#334455' }} component={RouterLink} to={to}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
  </ListItem>
  );
};

export default NavigationLink;