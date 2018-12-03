import { observable } from 'mobx';

const queueStore = observable({ 
  rows: [],
  page: 0,
  rowsPerPage: 10,
});

export default queueStore;
