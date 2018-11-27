import React from 'react';
import SearchBlock from './SearchBlock';
import NicknamePrompt from './NicknamePrompt';

import { inject, observer } from 'mobx-react';
import TableResult from './Table-Result';

@inject('UserStore')
@observer
class Body extends React.Component {

  render() {
    const { UserStore } = this.props;
    if ( !UserStore.nicknameSet ) {
      return(
        <NicknamePrompt />
      )
    }
    else {
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
  }
}

export default Body;