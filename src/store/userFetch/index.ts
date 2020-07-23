import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "store/store";

/*
before
dispatch(FetchUsersIsPending()) loading === pending

dispatch(FetchUsers())

dispatch(FetchUsersSuccess()) loading === success
dispatch(FetchUsersError()) loading === error
*/

export const fetchCats = createAsyncThunk(
  `store/fetchCats`,
  async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

interface Meta {
  loading: boolean;
  error: boolean;
  message: string;
}

interface User {
  id: number;
  name: string;
}

export interface IUser {
  meta: Meta;
  data: User[];
}

const initialState: IUser = {
  "meta": {
    "loading": false,
    "error": false,
    "message": ``
  },
  "data": []
};

const UserSlice = createSlice({
  "name": `JsonPlacehoder user`,
  initialState,
  "reducers": {
    // fetchData(state, action: PayloadAction<User[]>) {
    //   state.meta.loading = false;
    //   state.data = action.payload;
    //   console.log(`User`, action.payload);
    // },
    // loadFailed(state, action: PayloadAction<string>) {
    //   state.meta = {
    //     "loading": false,
    //     "error": true,
    //     "message": action.payload
    //   };
    //   state.data = [];
    // }
  },
  "extraReducers": (builder) => {
    builder.addCase(fetchCats.pending, (state) => (
      {
        ...state,
        "meta": {
          ...state.meta,
          "loading": true
        }
      }
    ));
    builder.addCase(fetchCats.fulfilled, (state, { payload }) => (
      {
        ...state,
        "meta": {
          ...state.meta,
          "loading": false,
          "error": false,
          "message": ``
        },
        "data": payload
      }
    ));
    builder.addCase(fetchCats.rejected, (state, { error }) => {
      window.alert(error?.message);
      return {
        ...state,
        "meta": {
          "loading": false,
          "error": true,
          "message": error?.message || ``
        }
      };
    });
  }
});

export default UserSlice.reducer;

// export const fetchCats = (): AppThunk => async (dispatch) => {
//   const url = `https://jsonplaceholder.typicode.com/users`;

//   try {
//     // dispatch(loadState());
//     const response = await fetch(url);
//     const data = await response.json();
//     // const users = data.slice(0, 3).map(({ id, name }) => ({ id, name }));
//     dispatch(fetchMyCats);
//     // dispatch(fetchData(data));
//   } catch (err) {
//     // dispatch(loadFailed(`users are unavailable`));
//     console.log({ err });
//   }
// };
