import React from 'react';
import { inject, observer } from 'mobx-react';
import Search from './InputBox.js';



@inject('SearchStore')
@observer
class LinkRequest extends React.Component {

  handleKeyPress = (e) => {
    const { SearchStore } = this.props;
    if (e.key === 'Enter') {
    }
  }  

  render() {
    const { classes, SearchStore } = this.props;
    return(
        <div>
          <p>Tu es sub et tu ne trouves pas ton morceau dans la recherche ? Envoie un lien depuis <a href="https://chorus.fightthe.pw/" target="Chorus">Chorus</a></p> 
          <br />
          <Search onKeyPress={e => this.handleKeyPress(e)} name="link" label="Lien Chorus" placeholder="https://drive.google.com/drive/folders/1MODZ_dJshA0kOG1KpvG2zxOBoWksnomP" storename="SearchStore" store={SearchStore} class="App-inputBoxWide" />
        </div>
    )
  }

}

export default LinkRequest;