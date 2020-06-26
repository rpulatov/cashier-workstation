function createStore(reducer, initialState) {
  let state = initialState;

  const subscribers = [];

  function getState() {
    return state;
  }

  function subscribe(cb) {
    subscribers.push(cb);
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach((cb) => {
      cb(state);
    });
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

function plus(val) {
  return { type: "plus", val };
}

const initialState = {
  counter: 0,
};

function reducer(prevState = initialState, action) {
  if (action.type === "plus") {
    return { ...prevState, counter: prevState.counter + action.val };
  }
  return prevState;
}

const store = createStore(reducer);
store.subscribe((val) => {

  console.info("subscribe", val);
});


store.dispatch(plus(5));


store.dispatch(plus(5));

store.dispatch(plus(5));


store.getState()