// reducers.js

const initialState = {
    token: null,
    id: null,
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          id: action.payload.id,
          error: null,
        };
      case 'LOGOUT':
        return initialState;
      case 'FETCH_USER_PROFILE_SUCCESS':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  