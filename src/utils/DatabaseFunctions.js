import axios from 'axios';
import StoreFunctions from './StoreFunctions.js';

function searchFullOrFiltered (artist, song) {
  if ( artist || song ) {
    this.searchSongs(artist, song)
  }
  else {
    this.getSonglist()
  }
}

function getSonglist () {
  axios.get(`/api/getSonglist`).then(function (axiosTestResult) {
    StoreFunctions.changeStoreValue({
      storeKey: "rows",
      value: axiosTestResult.data.SongList,
      store: "ResultStore"
    })
  })
}

function searchSongs (artist, song) {
  axios.get(`/api/searchSongs?artist=${artist}&song=${song}`).then(function (axiosTestResult) {
    StoreFunctions.changeStoreValue({
      storeKey: "rows",
      value: axiosTestResult.data.SongList,
      store: "ResultStore"
    })
  })
}


export default {

  getSonglist,
  searchSongs,
  searchFullOrFiltered

}


