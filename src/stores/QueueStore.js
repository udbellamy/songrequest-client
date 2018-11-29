import { observable } from 'mobx';

const queueStore = observable({ 
  rows: [{
    _id: "",
    artist: "",
    song: "",
    user: "",
    link: ""
  }],
  page: 0,
  rowsPerPage: 10,
});

export default queueStore;
