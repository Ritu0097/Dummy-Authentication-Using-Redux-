export const loginSuccess = (token, id) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token, id },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const fetchUserProfileSuccess = (user) => ({
    type: 'FETCH_USER_PROFILE_SUCCESS',
    payload: user,
  });
  