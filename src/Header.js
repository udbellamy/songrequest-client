import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonAppBar from './AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header(props) {
  const { classes, page } = props;

  return (
    <div className={classes.root}>
      <ButtonAppBar 
        position="static" 
        color="primary" 
        title="Guitar Hero Song Request"
      />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);