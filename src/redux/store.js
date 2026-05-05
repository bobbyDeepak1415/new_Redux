import { configureStore } from "@reduxjs/toolkit";

import Counter from './CounterSlice'


const store=configureStore({
    reducer:{
        counter:Counter
    }

})


export default store