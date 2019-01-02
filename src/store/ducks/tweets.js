export const Types = {
  GET_REQUEST: "tweets/GET_REQUEST",
  GET_SUCCESS: "tweets/GET_SUCCESS",
  POST_REQUEST: "tweets/POST_REQUEST",
  POST_SUCCESS: "tweets/POST_SUCCESS",
  PUT_REQUEST: "tweets/PUT_REQUEST",
  PUT_SUCCESS: "tweets/PUT_SUCCESS",
  DEL_REQUEST: "tweets/DEL_REQUEST",
  DEL_SUCCESS: "tweets/DEL_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false };
    case Types.POST_REQUEST:
      return { ...state, loading: true };
    case Types.POST_SUCCESS: {
      const newData = state.data.slice();
      newData.push(action.payload.data);
      return { ...state, loading: false, data: newData };
    }
    case Types.PUT_REQUEST:
      return { ...state, loading: true };
    case Types.PUT_SUCCESS: {
      const newData = state.data.slice();
      const index = newData.findIndex(
        item => item.id === action.payload.data.id
      );
      newData[index] = action.payload.data;
      return { ...state, loading: false, data: newData };
    }
    case Types.DEL_REQUEST:
      return { ...state, loading: true };
    case Types.DEL_SUCCESS: {
      const newData = state.data.slice();
      const index = newData.findIndex(item => item.id === action.payload.id);
      if (index > -1) newData.splice(index, 1);
      return { ...state, loading: false, data: newData };
    }
    default:
      return state;
  }
}

export const Creators = {
  getTweetsRequest: userId => ({
    type: Types.GET_REQUEST,
    payload: { userId }
  }),

  getTweetsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  postTweetRequest: data => ({
    type: Types.POST_REQUEST,
    payload: { data }
  }),

  postTweetSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data }
  }),

  putTweetRequest: data => ({
    type: Types.PUT_REQUEST,
    payload: { data }
  }),

  putTweetSuccess: data => ({
    type: Types.PUT_SUCCESS,
    payload: { data }
  }),

  delTweetRequest: id => ({
    type: Types.DEL_REQUEST,
    payload: { id }
  }),

  delTweetSuccess: id => ({
    type: Types.DEL_SUCCESS,
    payload: { id }
  })
};
