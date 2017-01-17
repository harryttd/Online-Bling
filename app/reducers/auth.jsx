import axios from 'axios';

const reducer = (state = null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user;
  }
  return state;
};

const AUTHENTICATED = 'AUTHENTICATED';
export const authenticated = user => ({
  type: AUTHENTICATED, user
});
export const signup = credential => dispatch =>
  axios.put('/api/auth/signup', credential)
    .then(()=>dispatch(whoami()))
    .catch(()=>dispatch(whoami()));

export const login = credential => dispatch =>
    axios.put('/api/auth/login', credential)
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data;;
        dispatch(authenticated(user));
      })
      .catch(failed => dispatch(authenticated(null)));

export default reducer;
