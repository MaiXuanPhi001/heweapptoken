import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistoryTransfer } from "../../api/transferApi";

const transferSlice = createSlice({
    name: 'transfer',
    initialState: {
        loading: false,
        total: 0,
        page: 1,
        data: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(onGetHistoryTransfer.pending, (state, action) => {
                state.loading = true
            })
            .addCase(onGetHistoryTransfer.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.data = action.payload.data.array
                    state.page = action.payload.page
                    state.total = action.payload.data.total
                    state.loading = false
                }
            })
    }
})

export const onGetHistoryTransfer = createAsyncThunk('transfer/history', async (data) => {
    const res = await getHistoryTransfer(data)
    console.log(res)
    return res
})

export default transferSlice