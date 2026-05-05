import { createSlice } from "@reduxjs/toolkit"


const initialState={
    count:0
}


const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:()=>{

        }
    }


export const {increment}=counter.actions

})


export default counterSlice.reducer