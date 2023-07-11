import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  isToday: boolean;
  hour: string;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodosReducer: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      console.log(state.todos);
    },
    addTodoReducer: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    hideCompletedReducer: (state) => {
      state.todos = state.todos.filter(todo => !todo.isCompleted);
    },
    updateTodoReducer: (state, action: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
    deleteTodoReducer: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
});

export const {
  setTodosReducer,
  addTodoReducer,
  updateTodoReducer,
  hideCompletedReducer,
  deleteTodoReducer,
} = todosSlice.actions;

export default todosSlice.reducer;
