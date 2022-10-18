import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistoryTransfer } from "../../api/transferApi";

const transferSlice = createSlice({
    name: 'transfer',
    initialState: {
        loading: false,
        historyTransfer: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(onGetHistoryTransfer.pending, (state, action) => {
                state.loading = true
        })
        .addCase(onGetHistoryTransfer.fulfilled, (state, action) => {
            if (action.payload.status) {
                state.historyTransfer = action.payload.data
                state.loading = false
            }
        })
    }
})

export const onGetHistoryTransfer = createAsyncThunk('transfer/history', async () => {
    const res = await getHistoryTransfer()
    return res
})

export default transferSlice