import React from 'react';
import SearchBlock from './SearchBlock';
import NicknamePrompt from './NicknamePrompt';

import { inject, observer } from 'mobx-react';
import TableResult from './Table-Result';
import TableQueue from './Table-Queue';

@inject('UserStore', 'ViewStore')
@observer
class Body extends React.Component {

  render() {
    const { UserStore, ViewStore } = this.props;
    if ( !UserStore.nickname || !ViewStore.page ) {
      return(
        <NicknamePrompt />
      )
    }

    if ( UserStore.nickname && ViewStore.page === "search" ) {
      return(
        <div>
          <p>Tu veux ajouter quelle chanson ?</p>
          <SearchBlock />
          <div>
          <TableResult />
          </div>
        </div>
      )
    }

    if ( UserStore.nickname && ViewStore.page === "queue" ) {
      return(
        <div className="App-TableQueue">
          <p>Voici la liste d'attente</p>
          <div>
            <TableQueue />
          </div>
        </div>
      )
    }
  }
}

export default Body;