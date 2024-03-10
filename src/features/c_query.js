import { createSlice } from '@reduxjs/toolkit'

export const cqSlice = createSlice({
  name: 'query',
  initialState: {
    "quest":""
  },
  reducers: {
    current_quest: (state, action) => {
      state.quest=action.payload;
    },
  },
})

export const {current_quest} = cqSlice.actions

export default cqSlice.reducer