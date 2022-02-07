import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

import Note from "./note.js";

const initialState = {
  notes: [],
};

const TOGGLE_NOTE = "TOGGLE_NOTE";

export const toggleNote = (newNote) => {
  return {
    type: TOGGLE_NOTE,
    note: Note(...newNote),
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTE: {
      const loc = state.notes.indexOf(action.note);
      const newNotes =
        loc > -1
          ? state.notes.slice(0, loc).concat(state.notes.slice(loc + 1))
          : [...state.notes, action.note];
      return { ...state, notes: newNotes };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
