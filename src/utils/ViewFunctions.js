import StoreFunctions from './StoreFunctions.js';

function setPageName (event, pageName) {
  event.preventDefault();
  StoreFunctions.changeStoreValue({
    storeKey: "page",
    value: pageName,
    store: "ViewStore"
  })

}

export default {

  setPageName

}
