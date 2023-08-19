import {configureStore} from '@reduxjs/toolkit'
import authReducer from './redux/slices/AuthSlice'
import productReducer from './redux/slices/ProductSlice'



export const store=configureStore({
  reducer:{
    authReducer:authReducer,
    productReducer:productReducer
  }
})