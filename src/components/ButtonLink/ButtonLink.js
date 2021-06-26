import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ButtonLink = ({ children, ...rest }) => {
  return (
    <Button color="primary" component={RouterLink} {...rest}>
     {children}
    </Button>
  );
};

export default ButtonLink;