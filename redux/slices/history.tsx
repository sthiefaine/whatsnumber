import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

interface HistoryNumbers {
  id: string;
  historyPhoneNumber: string;
  name: string;
}

let initialState = {
  historyNumbers: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState: initialState,

  reducers: {
    addNumberToHistory: (state, action: PayloadAction<string>) => {
      state.historyNumbers = [
        ...state.historyNumbers,
        {
          id: uuidv4(),
          number: action.payload,
          name: "",
        },
      ] as any;
    },
  },
});

export const { addNumberToHistory } = historySlice.actions;

export default historySlice.reducer;
