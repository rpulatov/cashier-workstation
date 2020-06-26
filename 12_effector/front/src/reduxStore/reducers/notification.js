export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const showNotification = (message, type = "info") => ({
  type: SHOW_NOTIFICATION,
  payload: {
    message,
    type,
  },
});

export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const removeNotification = (message) => ({
  type: REMOVE_NOTIFICATION,
  payload: {
    message,
  },
});

export default (state = [], action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return [action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter((item) => item.message !== action.payload.message);
    default:
      return state;
  }
};
