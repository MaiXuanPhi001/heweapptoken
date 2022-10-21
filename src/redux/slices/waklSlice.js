import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfile, login } from "../../api/userApi";
import { getRan, sendPositionStart, getAllRun, distanceDetail, sendPositionUpdate, sendPositionEnd } from "../../api/walkApi";
import { contants } from "../../utils/contants";

const walkSlice = createSlice({
    name: 'walk',
    initialState: {
        loading: false,
        ranLimit: null,
        totalRun: [],
        detailRun: {}
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(onGetRan.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.ranLimit = action.payload.data
                }
            })
            .addCase(getTotalRun.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.totalRun = action.payload.data.array
                }
            })
            .addCase(getDetailRun.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getDetailRun.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.detailRun = action.payload.data
                    state.loading = false
                }
            })
    }
})

export const onGetRan = createAsyncThunk('walk/ranlimit', async () => {
    const res = await getRan()
    return res
})

export const sendPositionRunStart = createAsyncThunk('walk/positionStart', async (position) => {
    const res = await sendPositionStart(position)
    return { status: res.status, position }
})

export const onSendPositionUpdate = createAsyncThunk('walk/positionUpdate', async (position) => {
    const res = await sendPositionUpdate(position)
    return res
})

export const onSendPositionEnd = createAsyncThunk('walk/positionEnd', async (position) => {
    const res = await sendPositionEnd(position)
    return res
})

export const getTotalRun = createAsyncThunk('walk/getTotalRun', async () => {
    const res = await getAllRun()
    return res
})

export const getDetailRun = createAsyncThunk('walk/getDetailRun', async (idRun) => {
    const res = await distanceDetail(idRun)
    return res
})

export default walkSlice