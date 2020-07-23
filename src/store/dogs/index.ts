/* eslint-disable @typescript-eslint/indent */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from "store/store";

interface IMeta {
  loading: boolean;
  error: boolean;
  message: string;
}

type Data = string[]

// interface ITest {
//   src: string[];
// }

/*
   old data =  {
      src : string[]
    }

    new data = string[]

    dogs.map() => i.src

    assumed data
    [{
      src: 'link-to-image'
    }]

    actual data
    ['link-to-image']
    dogs.map() => i

*/

interface IDogs {
  meta: IMeta;
  dogs: Data;
}

const initialState: IDogs = {
  "meta": {
    "loading": false,
    "error": false,
    "message": ``
    // name: {
    //   first: chris,
    //   last: longridge
    // }
  },
  "dogs": []
};

const dogSlice = createSlice({
  "name": `random-dogs`,
  initialState,
  "reducers": {
    // old state ----> make changes ----> return new state
    loadState(state) {
      // // state.meta.name.first = chris
      // state.meta = {
      //   "loading": true,
      //   "error": false,
      //   "message": ``
      // };
      // state.dogs = [];
      return {
        ...state,
        "meta": {
          "loading": true,
          "error": false,
          "message": ``
        },
        "dogs": []
      };
    },
    fetchData(state, action: PayloadAction<Data>) {
      return {
        ...state,
        "meta": {
          ...state.meta,
          "loading": false
        },
        "dogs": action.payload
      };
      // state.meta.loading = false;
      // state.dogs = action.payload;

      // console.log(`dogs`, action.payload);
    },
    loadFailed(state, { payload }: PayloadAction<string>) {
      // state.meta = {
      //   "loading": false,
      //   "error": true,
      //   "message": action.payload
      // };
      // state.dogs = [];
      return {
        ...state,
        "meta": {
          ...state.meta,
          "error": true,
          "message": payload
        },
        "dogs": []
      };
    }
  }

});

export const { loadState, fetchData, loadFailed } = dogSlice.actions;
export default dogSlice.reducer;

export const fetchDogs = (): AppThunk => async (dispatch) => {
  const url = `https://dog.ceo/api/breeds/image/random/5`;

  try {
    dispatch(loadState);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.message);
    const singleData = data.message.map((i) => i);
    dispatch(fetchData(singleData));
  } catch (error) {
    dispatch(loadFailed(`dogs are unavailable`));
    console.log({ error });
  }
};
