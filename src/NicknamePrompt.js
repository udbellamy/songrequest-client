import React from 'react';
import PropTypes from 'prop-types';

import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Search from './InputBox.js';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '10rem',
  },
  input: {
    display: 'none',
  },
});

@inject('UserStore')
@observer
class NicknamePrompt extends React.Component {

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      StoreFunctions.changeStoreValue({
        storeKey: "page",
        value: "search",
        store: "ViewStore"
      })
      
      StoreFunctions.changeStoreValue({
        storeKey: "nicknameSet",
        value: true,
        store: "UserStore"
    })
    }
  }

  handleClick() {
    StoreFunctions.changeStoreValue({
      storeKey: "page",
      value: "search",
      store: "ViewStore"
    })

    StoreFunctions.changeStoreValue({
      storeKey: "nicknameSet",
      value: true,
      store: "UserStore"
  })
  }

  render() {
    const { classes, UserStore } = this.props;
    return(
      <div>
        <p>Comment tu t'appelles mon ptit gars ?</p>
        <Search onKeyPress={e => this.handleKeyPress(e)} name="nickname" label="Pseudo" placeholder="Woody" storename="UserStore" store={UserStore} />
        <Button
          onClick={e => this.handleClick()}
          variant="contained"
          type="submit"
          color="primary"
          className={classes.button}
        > Go </Button>
      </div>
    )
  }
}

NicknamePrompt.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (NicknamePrompt);