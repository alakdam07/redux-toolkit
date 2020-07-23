/* eslint-disable no-multi-assign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from "store/store";
interface IPost {
  loading: boolean;
  error: boolean;
  title: string[];
}

const initialState: IPost = { "loading": false, "error": false, "title": [] };

const postSlice = createSlice({
  "name": `post`,
  initialState,
  "reducers": {
    loadState(state) {
      state.loading = true;
      state.error = false;
      state.title = [];
    },
    fetchPosts(state, action: PayloadAction<IPost["title"]>) {
      state.loading = false;
      state.error = false;
      state.title = action.payload;
    },
    failLoad(state, action: PayloadAction<IPost["error"]>) {
      state.loading = false;
      state.error = action.payload;
      state.title = [];
    }
  }

});

export const { loadState, fetchPosts, failLoad } = postSlice.actions;

export default postSlice.reducer;

export const fetchPost = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loadState());
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    const posts = data.map(({ title }) => title);
    dispatch(fetchPosts(posts));
  } catch (err) {
    dispatch(failLoad);
    console.log(err);
  }
};
