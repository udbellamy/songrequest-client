import { observable } from 'mobx';

const searchStore = observable({ 
  artist: "",
  song: ""
});

export default searchStore;
