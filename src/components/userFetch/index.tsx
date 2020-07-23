import React, { memo } from "react";
import { fetchCats } from 'store/userFetch';
import { RootState } from 'store/combineReducer/index';
import { useSelector, useDispatch } from 'react-redux';

export default memo(() => {
  const state = useSelector((state: RootState) => ({
    "meta": state.fetchUser.meta,
    "loading": state.fetchUser.meta.loading,
    "user": state.fetchUser.data
  }));
  console.log(`from component`, state.user);
  const dispatch = useDispatch();

  return (
    <>
      {state.loading ? <p>loading....</p> :
        state.user.map((i) =>
          <div key={i.id} style={{ "display": `inline-flex` }}>
            <p>{i.name}</p>
            <img
              alt="kitty"
              src={`https://robohash.org/${i.id}?set=set4&size=100x100`}
            />
          </div>
        )
      }
      <br></br>
      <br></br>
      <br></br>
      <button type="button" onClick={() => dispatch(fetchCats())}>
        Fetch Cats
      </button>
    </>
  );
});
