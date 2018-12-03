import { observable } from 'mobx';

const viewStore = observable({ 
  page: "",
  autorefresh: 0,
});

export default viewStore;
