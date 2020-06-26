const ADD_POSITION = "ADD_POSITION";
export function addPosition(item) {
  return {
    type: ADD_POSITION,
    item,
  };
}

const initPositions = [
  {
    numPosition: 1,
    name: "Товар",
    scaling: "1/1",
    count: 1,
    price: 10,
    pku: true,
    capacity: 5,
    location: "",
    store: "",
    discount: "Весна",
  },
];

export default (prevState = initPositions, action) => {
  switch (action.type) {
    case ADD_POSITION:
      const numPosition = prevState.length + 1;
      return [...prevState, { ...action.item, numPosition }];
    default:
      return prevState;
  }
};
