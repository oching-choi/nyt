import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './newsSlice'

export default configureStore({
  reducer: {
    newsSlice : newsSlice.reducer
   }
}) 