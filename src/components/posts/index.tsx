import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from 'store/post';
import { RootState } from 'store/combineReducer';

const Wrapper = styled.div`
border: 1px solid rgba(0, 0, 0, 0.125);
border-radius: 0.25rem;
margin: 1rem;
background-color: white;
`;
const Content = styled.div`
padding: 0.25rem;
`;

export default memo(() => {
  const state = useSelector((rootState: RootState) => ({
    "post": rootState.fetchPost.title
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  console.log(`Post`, state.post);

  return (
    <Wrapper>
      <Content>
        {state.post.slice(0, 10).map((i, index) =>
          <li style={{ "color": `black` }} key={index}>{i}</li>)}
      </Content>
    </Wrapper>
  );
});
