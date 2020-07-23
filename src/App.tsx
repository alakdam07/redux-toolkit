import React from 'react';
import styled from 'styled-components';
import { RootState } from 'store/combineReducer';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'store/counter';
import { noPayloadAction } from 'store/no-payload/action';
import { addUser, removeUser } from 'store/user';
import Fetch from 'components/userFetch';
import Dogs from 'components/Dogs';
import Posts from 'components/posts';
import Todo from 'components/todo';

const Divider = styled.div`
margin-top: 40px;
`;

const LineDivider = styled.hr`
border-top: 1px solid;
`;

const Button = styled.button`
background-color: #4CAF50;
color: white;
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
outline:none;
`;

const App = () => {
  const parentState = useSelector((rootState: any) => ({
    "counter": rootState.counter.counter,
    "noPayload": rootState.reducer.noPayload,
    "user": rootState.user.userName
  }));

  const dispatch = useDispatch();

  return (
    <>
      <Divider style={{ "display": `inline-flex` }}>
        <Button onClick={() => dispatch(increment())} >Increment</Button>
        <h1>{parentState.counter}</h1>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </Divider>
      <LineDivider />
      <Divider>
        <h2> {parentState.noPayload}</h2>
        <Button type="button" onClick={() => dispatch(noPayloadAction())}>
          No Payload
        </Button>
      </Divider>
      <LineDivider />
      <Divider style={{ "display": `inline-flex` }}>
        <Button onClick={() => dispatch(addUser(`John Doe`))}>
          set-user
        </Button>
        <h2> {parentState.user}</h2>
        <Button onClick={() => dispatch(removeUser(``))} >
          remove user
        </Button>
      </Divider>
      <LineDivider />
      <Divider>
        <Fetch />
      </Divider>
      <LineDivider />
      <Divider>
        <Dogs />
      </Divider>
      <LineDivider />
      <Divider>
        <Posts />
      </Divider>
      <LineDivider />
      <Divider>
        <Todo />
      </Divider>
    </>

  );
};

export default App;
