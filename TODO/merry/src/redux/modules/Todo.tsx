import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"

export type InitialState = [{
    id:string,
    content:string,
    done:boolean
}]

export type TodoPayload = {
    id:string,
    content:string,
    done:boolean
}

const initialState:InitialState = 
   [ {id:"0",
    content:"화이팅!",
    done:false}]


export const getTodo = createAsyncThunk("GET/TODO", async (payload, thunkAPI)=>{
    try{
        const response = await axios.get("http://localhost:3001/posts")
        return thunkAPI.fulfillWithValue(response)
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const addTodo = createAsyncThunk("POST/TODO",async (payload, thunkAPI) => {
    try{
        const response = await axios.post("http://localhost:3001/posts", payload)
        return thunkAPI.fulfillWithValue(response)
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{},
    extraReducers : builder =>{
        // builder.addCase(addTodo.fulfilled, (state:InitialState, action:PayloadAction<TodoPayload> )=>{
        //     state = [...state, action.payload]
        // })
    }
})

export const todoAction = todoSlice.actions;
export default todoSlice
