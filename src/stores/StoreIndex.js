
import searchStore from '../stores/SearchStore';
import userStore from '../stores/UserStore';
import resultStore from '../stores/ResultStore';
import viewStore from '../stores/ViewStore';
import queueStore from '../stores/QueueStore';

const storeBank = {
  "SearchStore": searchStore,
  "QueueStore": queueStore,
  "UserStore": userStore,
  "ResultStore": resultStore,
  "ViewStore": viewStore,
}

export default storeBank