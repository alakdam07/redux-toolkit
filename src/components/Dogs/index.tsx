import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDogs } from 'store/dogs';
import { RootState } from 'store/combineReducer';

export default memo(() => {
  const { dogs, meta } = useSelector((rootState: RootState) => rootState.fetchDogs);
  const dispatch = useDispatch();
  console.log(`dogs`, dogs);
  return (
    <div>
      {meta.loading ? <p>loading....</p> :
        dogs.map((i, index) =>
          <div key={index}>
            <ul>
              <li>{i}</li>
            </ul>
            <img style={{ "width": 50, "height": 50 }} src={i} />
          </div>)}
      <br></br>
      <button onClick={() => dispatch(fetchDogs())}> display random dogs</button>
    </div>
  );
});
