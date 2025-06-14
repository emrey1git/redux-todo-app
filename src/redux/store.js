import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,  // burada "todo" olmalı, yoksa useSelector'da da farklı isim olur
  },
})
