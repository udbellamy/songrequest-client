import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '10rem',
  },
  input: {
    display: 'none',
  },
});

class Button extends React.Component {

  render() {
    const { classes } = this.props;
    return(
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >{this.props.text}</Button>
    )
  }
  }

Button.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (Button);