import { createReducer } from "@reduxjs/toolkit";
import { noPayloadAction } from "./action";

interface first {
  noPayload: string;
}
// CreateReducer:
// A utility function that allows defining a reducer as a mapping from action
// type to case reducer functions that handle these action types.
// The reducer's initial state is passed as the first argument.

// The body of every case reducer is implicitly wrapped with a call to produce()
// from the immer library. This means that rather than returning a new state object,
// you can also mutate the passed-in state object directly; these mutations
// will then be automatically and efficiently translated into copies,
// giving you both convenience and immutability.

// @param initialState — The initial state to be returned by the reducer.

// @param builderCallback — A callback that receives a builder object to
// define case reducers via calls to builder.addCase(actionCreatorOrType, reducer).

const initialState: first = { noPayload: "" };

const first = createReducer(initialState, builder =>
  builder.addCase(noPayloadAction, state => {
    //Add a case reducer for actions
    // created by this action creator.
    state.noPayload = "No Payload";
    console.log(`reducer action: ${noPayloadAction}`);
  })
);

export default first;
