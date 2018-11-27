import React from 'react';
import './Material.css';

import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';

import { Search, Close } from '@material-ui/icons';

@inject('SearchStore')
@observer
class BoxIcon extends React.Component {

  render() {
    const { SearchStore, field, search } = this.props;
    if ( !SearchStore[field] && search ) {
      return(
        <Search className="material-icons md-dark md-inactive" />
      )  
    }
    else {
      return(
        <Close className="material-icons md-dark md-inactiveclose"
          onClick={e => StoreFunctions.changeStoreValue({
            storeKey: field,
            value: "",
            store: this.props.storename
          })}  
        />
      )
    }
  }

}

export default BoxIcon;