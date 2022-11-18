import {configureStore} from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import todos from "./modules/Todo"

const store = configureStore({
    reducer:{
        todos:todos.reducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export type RootState = ReturnType<typeof store.getState>

export default store