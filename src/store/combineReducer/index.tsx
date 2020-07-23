import { combineReducers } from 'redux';
import counter from 'store/counter';
import reducer from 'store/no-payload/reducer';
import user from 'store/user';
import fetchUser from 'store/userFetch';
import fetchDogs from 'store/dogs';
import fetchPost from 'store/post';
import todo from 'store/todo';

const rootReducer = combineReducers({
  counter,
  reducer,
  user,
  fetchUser,
  fetchDogs,
  fetchPost,
  todo
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
