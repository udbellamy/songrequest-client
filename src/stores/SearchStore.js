import { observable } from 'mobx';

const searchStore = observable({ 
  artist: "",
  song: "",
  search: false
});

export default searchStore;
