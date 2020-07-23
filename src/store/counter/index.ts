import { createSlice } from '@reduxjs/toolkit';

interface ICounter {
  counter: number;
}

const initialState: ICounter = {
  "counter": 1
};

const counter = createSlice({
  "name": `counter`,
  initialState,
  "reducers": {
    "increment": (state) => ({
      ...state,
      "counter": state.counter + 1
    }),
    "decrement": (state) => ({
      ...state,
      "counter": state.counter - 1
    })
  }
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
