import React from 'react';
import SearchBlock from './SearchBlock';
import NicknamePrompt from './NicknamePrompt';

import { inject, observer } from 'mobx-react';
import TableResult from './Table-Result';

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
        <div>
          <p>Voici la liste d'attente</p>
        </div>
      )
    }
  }
}

export default Body;