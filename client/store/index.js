import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

import Note from "./note.js";

// -- INITIAL STATE --
const initialState = {
  midiNotes: [],
};

// -- ACTION TYPES --
const TOGGLE_NOTE = "TOGGLE_NOTE";

// -- ACTION CREATORS --
export const toggleNote = (newNote) => {
  return {
    type: TOGGLE_NOTE,
    midiNote: Note(...newNote),
  };
};

// -- REDUCER --
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTE: {
      const loc = state.midiNotes.indexOf(action.midiNote);
      const newMidiNotes =
        loc > -1
          ? state.midiNotes.slice(0, loc).concat(state.midiNotes.slice(loc + 1))
          : [...state.midiNotes, action.midiNote];
      return { ...state, midiNotes: newMidiNotes };
    }
    default:
      return state;
  }
};

// -- STORE --
const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
