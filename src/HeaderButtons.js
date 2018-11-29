import React from 'react';
import ViewFunctions from './utils/ViewFunctions.js';
import Button from '@material-ui/core/Button';
import { inject, observer } from 'mobx-react';
import './App.css';

@inject('ViewStore')
@observer
class HeaderButtons extends React.Component {

  displayButtons() {
    const { ViewStore } = this.props;
    if ( ViewStore.page ) {
      return <div className="App-pageButtons">
      <Button color="inherit" onClick={e => ViewFunctions.setPageName(e, "search")} >Recherche</Button>
      <Button color="inherit" onClick={e => ViewFunctions.setPageName(e, "queue")} >SongQueue</Button>
    </div>
    }
  }

  render() {
    return (
      <div>
        {this.displayButtons()}
      </div>
    )
  }

}

export default HeaderButtons;