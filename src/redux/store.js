import { configureStore } from "@reduxjs/toolkit"
import transferSlice from "./slices/transferSlice"
import userSlice from "./slices/userSlice"
import walkSlice from "./slices/waklSlice"

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        walk: walkSlice.reducer,
        transfer: transferSlice.reducer
    }
})

export default store