import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinkRequest from './LinkRequest.js';
import DatabaseFunctions from './utils/DatabaseFunctions.js';
import StoreFunctions from './utils/StoreFunctions.js';

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
    width: '10rem',
  },
});

@inject('SearchStore', 'UserStore')
@observer
class MaxWidthDialog extends React.Component {
  state = {
    open: false,
    fullWidth: true,
    maxWidth: 'sm',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleMaxWidthChange = event => {
    this.setState({ maxWidth: event.target.value });
  };

  handleFullWidthChange = event => {
    this.setState({ fullWidth: event.target.checked });
  };

  validateButton() {
    const { SearchStore, UserStore } = this.props;
    DatabaseFunctions.postLinkToQueue(SearchStore.link, UserStore.nickname)
    StoreFunctions.changeStoreValue({
      storeKey: "link",
      value: "",
      store: "SearchStore"
    })
    this.handleClose()
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Button
          variant="contained"
          color="secondary" 
          onClick={this.handleClickOpen}>Je suis Sub !!</Button>
        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Envoyer un lien Chorus</DialogTitle>
          <DialogContent>
            <LinkRequest />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={e => this.validateButton()}
              variant="contained"
              color="primary"
              className={classes.button}
            > Valider
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

MaxWidthDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaxWidthDialog);
