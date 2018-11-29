import storeBank from '../stores/StoreIndex.js';

function changeStoreValue (storeChanges) {

  const {store, storeKey, value} = storeChanges

  storeBank[store][storeKey] = value

}

function changeStoreValueInArray (storeChanges) {

  const {store, value} = storeChanges

  storeBank[store].arrayObject = value

}

function deleteFromStore (storeChanges) {

  const {store, indexNumber, array} = storeChanges

  storeBank[store][array].splice(array, indexNumber);

}

function clearStore (store) {

  const myStore = storeBank[store]

  for(let i in myStore) myStore[i] = "";

}

export default {

  changeStoreValue,
  changeStoreValueInArray,
  clearStore,
  deleteFromStore

}
