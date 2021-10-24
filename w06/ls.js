const storage = window.localStorage;

get() {
    return storage;
}

add(key, data) {
    return
}
function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
                       
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();


