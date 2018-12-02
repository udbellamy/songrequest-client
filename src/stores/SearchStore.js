import { observable } from 'mobx';

const searchStore = observable({ 
  artist: "",
  song: "",
  link: "",
  search: false
});

export default searchStore;
