/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import { combineReducers } from 'redux';

import PostReducer from './post-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  auth: AuthReducer,
});

export default rootReducer;
