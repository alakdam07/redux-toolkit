import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import { Todo } from './type';

const initialState: Todo[] = [
  {
    "id": uuid(),
    "desc": `running`,
    "isComplete": true
  },
  {
    "id": uuid(),
    "desc": `cooking`,
    "isComplete": true
  },
  {
    "id": uuid(),
    "desc": `cleaning`,
    "isComplete": true
  }
];

const todoSlice = createSlice({
  "name": `todo`,
  initialState,
  "reducers": {
    "addTodo": (state, { payload }: PayloadAction<string>) => {
      state.push({ "id": uuid(), "desc": payload, "isComplete": false });
    },
    "edit": (state, { payload }: PayloadAction<{ id: number; desc: string }>) => {
      const editTask = state.find((todo) => todo.id === payload.id);
      if (editTask) {
        editTask.desc = payload.desc;
      }
    },
    "deleteTodo": (state, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),

    "sort": (state) => state.sort((a, b) => a.desc.localeCompare(b.desc))
  }
});

export const { edit, addTodo, deleteTodo, sort } = todoSlice.actions;

export default todoSlice.reducer;
