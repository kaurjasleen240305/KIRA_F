import { configureStore } from '@reduxjs/toolkit'
import token_slice from './features/token_slice'
import historySlice from './features/prev_his'
import cqSlice from './features/c_query'

export default configureStore({
  reducer: {
    token:token_slice,
    history:historySlice,
    cq:cqSlice,
  },
})