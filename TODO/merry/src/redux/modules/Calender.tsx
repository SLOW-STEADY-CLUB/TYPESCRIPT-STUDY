import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const today = new Date()

const initialState = {
    year: today.getFullYear(),
     month: today.getMonth(),
     modal: {
         visible: false,
         index: '',
     },
     schedule: []
}

export const getTodos = createAsyncThunk("GET/TODO", async (payload, thunkAPI)=>{
    try{
        const response = await axios.get("http://localhost:3001")
        return thunkAPI.fulfillWithValue(response)
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})