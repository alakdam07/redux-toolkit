import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/combineReducer';
import { addTodo, deleteTodo, sort } from 'store/todo';
import styled from 'styled-components';

const Tread = styled.td`
border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;
export default memo(() => {
  const [inputValue, setInputValue] = useState(``);
  const dispatch = useDispatch();
  const todoState = useSelector((rootState: RootState) => ({
    "todos": rootState.todo
  }));

  // console.log(todoState.todos);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addTodo(inputValue));
          setInputValue(``);
        }}
        style={{ "display": `block`, "marginBottom": 20 }}
      >
        <label htmlFor="new-todo">Add new:</label>
        <input
          value={inputValue}
          onChange={(event: any) => setInputValue(event.currentTarget.value)}

        />
        <button type="submit">Create</button>
      </form>

      <div>{todoState.todos.map((i) =>
        // eslint-disable-next-line react/jsx-key
        <table style={{ "paddingLeft": 500 }}>
          <tr key={i.id}>
            <Tread >{i.id}</Tread >
            <Tread >{i.desc}</Tread >
            <Tread> <button>edit</button></Tread >
            <Tread> <button onClick={() => dispatch(deleteTodo(i.id))} >Remove</button></Tread >
          </tr>
        </table>
      )}
      </div>
      <button onClick={() => dispatch(sort())} >Sort</button>
    </>
  );
});
