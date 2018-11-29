import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar from './AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header(props) {
  const { classes } = props;

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