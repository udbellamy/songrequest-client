import React from 'react';
import Search from './InputBox.js';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DatabaseFunctions from './utils/DatabaseFunctions.js';
import CircularIndeterminate from './ProgressIcon.js';

import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '10rem',
  },
  input: {
    display: 'none',
  },
});

@inject('SearchStore', 'UserStore')
@observer
class SearchBlock extends React.Component {

  handleKeyPress = (e) => {
    const { SearchStore } = this.props;
    if (e.key === 'Enter') {
      DatabaseFunctions.searchFullOrFiltered(e, SearchStore.artist, SearchStore.song)
    }
  }

  buttonContent() {
    const { SearchStore } = this.props;
    if ( SearchStore.search === false ) {
      return <div>Rechercher</div>
    }

    else if ( SearchStore.search === true ) {
      return <CircularIndeterminate />
    }
  }
  
  render() {
    const { classes, SearchStore } = this.props;
    return(
      <div className="App-searchBlock">
        <div className="App-searchInner">
          <Search onKeyPress={e => this.handleKeyPress(e)} name="artist" label="Artiste" placeholder="AC/DC" storename="SearchStore" store={SearchStore} search={true} />
          <Search onKeyPress={e => this.handleKeyPress(e)} name="song" label="Chanson" placeholder="Highway to hell" storename="SearchStore" store={SearchStore} search={true} />
        </div>
        <Button
            onClick={e => DatabaseFunctions.searchFullOrFiltered(e, SearchStore.artist, SearchStore.song)}
            variant="contained"
            color="primary"
            className={classes.button}
          > {this.buttonContent()}
        </Button>
      </div>
    )
  }
}


SearchBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (SearchBlock);