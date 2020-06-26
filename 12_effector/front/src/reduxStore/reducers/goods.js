import { searchGoods } from "api/goods";
import { showNotification } from "./notification";

const GOODS_FETCH = "GOODS_FETCH";
const GOODS_SUCCESS = "GOODS_SUCCESS";

export const searchGoodsAction = (params) => (dispatch) => {
  dispatch({ type: GOODS_FETCH });
  searchGoods(params)
    .then((response) => {
      const { data } = response;
      dispatch({ type: GOODS_SUCCESS, payload: data });
    })
    .catch((e) => {
      dispatch(showNotification(e.message, "error"));
    });
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOODS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
