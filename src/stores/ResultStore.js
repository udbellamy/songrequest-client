import { observable } from 'mobx';

const resultStore = observable({ 
  rows: [],
  page: 0,
  rowsPerPage: 5,
});

export default resultStore;
