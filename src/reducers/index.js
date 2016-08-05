/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import { combineReducers } from 'redux';

import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
});

export default rootReducer;
