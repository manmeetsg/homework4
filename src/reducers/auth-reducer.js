/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import { ActionTypes } from '../actions';

const AuthReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false };
    default:
      return state;
  }
};

export default AuthReducer;
