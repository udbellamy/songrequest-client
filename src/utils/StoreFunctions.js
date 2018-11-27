import storeBank from '../stores/StoreIndex.js';

function changeStoreValue (storeChanges) {

  const {store, storeKey, value} = storeChanges

  storeBank[store][storeKey] = value

}

function clearStore (store) {

  const myStore = storeBank[store]

  for(let i in myStore) myStore[i] = "";

}

export default {

  changeStoreValue,
  clearStore

}
