import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import BoxIcon from './BoxIcon.js'
import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';

@inject('SearchStore', 'UserStore')
@observer
class Search extends React.Component {

  render() {
    const { name, style, label, placeholder, store, storename, search, onKeyPress } = this.props;
    return(
        <div className={style}>
          <TextField
            name={name}
            id={name}
            label={label}
            placeholder={placeholder}
            value={store[name]}
            variant="outlined"
            onKeyPress={onKeyPress}
            onChange={e => StoreFunctions.changeStoreValue({
              storeKey: name,
              value: e.target.value,
              store: storename
            })}
            fullWidth
            InputProps={{
              endAdornment: (
              <InputAdornment position={'end'} >
                <BoxIcon field={name} search={search} storename={storename}/>
              </InputAdornment>)
            }}
          />
        </div>
    )
  }

}

export default Search;