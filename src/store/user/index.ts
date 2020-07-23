import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Iuser {
  userName: string;
}

const initialState: Iuser = { "userName": `John's new name is` };

const user = createSlice({
  "name": `user`,
  initialState,
  "reducers": {
    addUser(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeUser(state, action: PayloadAction<string>) {
      state.userName = ` `;
    }
    // defaultUser(state, action: PayloadAction<string>) {
    //   return state.userName;
    // }
  }
});

export const { addUser, removeUser } = user.actions;

export default user.reducer;
