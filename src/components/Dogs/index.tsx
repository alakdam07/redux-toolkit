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
          <div key={index} style={{ "display": `inline` }}>
            <img style={{ "width": 100, "height": 100, "margin": 10 }} src={i} />
          </div>)}
      <br></br>
      <button onClick={() => dispatch(fetchDogs())}> display random dogs</button>
    </div>
  );
});
