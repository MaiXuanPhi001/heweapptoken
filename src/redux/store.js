import { configureStore } from "@reduxjs/toolkit"
import transferSlice from "./slices/transferSlice"
import userSlice from "./slices/userSlice"
import walkSlice from "./slices/waklSlice"
import withdrawSlice from "./slices/withdrawSlice"

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        walk: walkSlice.reducer,
        transfer: transferSlice.reducer,
        withdraw: withdrawSlice.reducer,
    }
})

export default store