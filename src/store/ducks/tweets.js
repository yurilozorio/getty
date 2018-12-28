export const Types = {
  GET_REQUEST: "tweets/GET_REQUEST",
  GET_SUCCESS: "tweets/GET_SUCCESS"
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
  })
};
