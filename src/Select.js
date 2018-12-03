import React from 'react';
import Switch from '@material-ui/core/Switch';

import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';
import DatabaseFunctions from './utils/DatabaseFunctions.js';

@inject('ViewStore', 'SearchStore')
@observer
class Switches extends React.Component {

  state = {
    checked: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    StoreFunctions.changeStoreValue({
      storeKey: "autorefresh",
      value: event.target.checked,
      store: "ViewStore"
    })
    if (event.target.checked) {
      this.timer = setInterval(DatabaseFunctions.getQueueLight, 20000)
    }
    else {
      clearInterval(this.timer)
      StoreFunctions.changeStoreValue({
        storeKey: "search",
        value: event.target.checked,
        store: "SearchStore"
      })
    }
  };

  render() {
    return (
        <Switch
          onChange={this.handleChange('checked')}
          value="checked"
        />
    );
  }
}

export default Switches;