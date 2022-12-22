import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistoryWidthdraw } from "../../api/transferApi";

const withdrawSlice = createSlice({
    name: 'withdraw',
    initialState: {
        total: 0,
        page: 0,
        data: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.
            addCase(getHistoryWidthdrawThunk.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.data = action.payload.data.array
                    state.total = action.payload.data.total
                    state.page = action.payload.page
                }
            })
    }
})

export const getHistoryWidthdrawThunk = createAsyncThunk('withdraw/getHistoryWidthdraw', async (data) => {
    const res = await getHistoryWidthdraw(data)
    return res
})


export default withdrawSlice