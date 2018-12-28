export const Types = {
  GET_REQUEST: "users/GET_REQUEST",
  GET_SUCCESS: "users/GET_SUCCESS",
  POST_REQUEST: "users/POST_REQUEST",
  POST_SUCCESS: "users/POST_SUCCESS",
  GET_USER: "users/GET_USER"
};

const INITIAL_STATE = {
  userLogado: {},
  data: [],
  loading: false
};

export default function users(state = INITIAL_STATE, action) {
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
    case Types.GET_USER:
      return { ...state, loading: true, userLogado: action.payload.user };
    default:
      return state;
  }
}

export const Creators = {
  getUsersRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getUsersSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  postUserRequest: data => ({
    type: Types.POST_REQUEST,
    payload: { data }
  }),

  postUserSuccess: data => ({
    type: Types.POST_SUCCESS,
    payload: { data }
  }),

  getUserLogado: user => ({
    type: Types.GET_USER,
    payload: { user }
  })
};
