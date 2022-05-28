import {configureStore} from "@reduxjs/toolkit"
import reducer from "./EarliReducers"

export const store = configureStore({
    reducer: {reducer}
})