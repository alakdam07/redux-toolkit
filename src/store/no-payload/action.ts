import { createAction } from "@reduxjs/toolkit";

export const noPayloadAction = createAction("No payload");

console.log(`Action: ${noPayloadAction}`);

//  createAction:
// A utility function to create an action creator for the given action type string.
// The action creator accepts a single argument,
// which will be included in the action object as a field called payload.
// The action creator function will also have its toString()
// overriden so that it returns the action type,
// allowing it to be used in reducer logic that is looking for that action type.
