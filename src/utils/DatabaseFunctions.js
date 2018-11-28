import axios from 'axios';
import StoreFunctions from './StoreFunctions.js';

function searchFullOrFiltered (event, artist, song) {
  event.preventDefault();
  StoreFunctions.changeStoreValue({
    storeKey: "search",
    value: true,
    store: "SearchStore"
  }) 
  if ( artist || song ) {
    this.searchSongs(artist, song)
  }
  else {
    this.getSonglist()
  }
}

function getSonglist () {
  axios.get(`https://songrequest-backend.herokuapp.com/api/getSonglist`).then(function (axiosTestResult) {
    StoreFunctions.changeStoreValue({
      storeKey: "rows",
      value: axiosTestResult.data.SongList,
      store: "ResultStore"
    })
    StoreFunctions.changeStoreValue({
      storeKey: "search",
      value: false,
      store: "SearchStore"
    }) 
  })
}

function searchSongs (artist, song) {
  axios.get(`https://songrequest-backend.herokuapp.com/api/searchSongs?artist=${artist}&song=${song}`).then(function (axiosTestResult) {
    StoreFunctions.changeStoreValue({
      storeKey: "rows",
      value: axiosTestResult.data.SongList,
      store: "ResultStore"
    })
    StoreFunctions.changeStoreValue({
      storeKey: "search",
      value: false,
      store: "SearchStore"
    }) 
  })
}


export default {

  getSonglist,
  searchSongs,
  searchFullOrFiltered

}


