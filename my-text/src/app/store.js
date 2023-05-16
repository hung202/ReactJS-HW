import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { manageUserReducer } from '../features/manageApp/User/reducer'

export const  store = configureStore({
    reducer: {
        counter: counterReducer,
        manageUser: manageUserReducer,
    },
})