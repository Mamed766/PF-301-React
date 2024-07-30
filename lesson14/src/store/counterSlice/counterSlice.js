import { createAction } from "@reduxjs/toolkit";
import { INCREMENT, DECREMENT, RESET } from "../actionstypes/actionsTypes";

const InitialState = {
  count: 0,
};

// export const counterSlice = createSlice({
//   initialState: InitialState,
//   name: "counter",
//   reducers: {
//     increment: (state) => {
//       state.count += 1;
//     },
//     decrement: (state) => {
//       state.count -= 1;
//     },
//     reset: (state) => {
//       state.count = 0;
//     },
//   },
// });

// export const { increment, decrement, reset } = counterSlice.actions;

export const counterReducers = (state = InitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const reset = createAction(RESET);
export const countSelector = (state) => state.counter.count;
