import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface HistoryNumbers {
  id: string;
  historyPhoneNumber: string;
  name: string;
}

let initialState = {
  historyNumbers: [],
};

const azerty = [
  {
    id: uuidv4(),
    number: +33658200918,
    name: "",
  },

  {
    id: uuidv4(),
    number: +336583442918,
    name: "test",
  },
];

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
      ];
    },
  },
});

export const { addNumberToHistory } = historySlice.actions;

export default historySlice.reducer;
