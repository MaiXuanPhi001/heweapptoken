import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProfile, login } from "../../api/userApi";
import { sendPositionEnd } from "../../api/walkApi";
import { contants } from "../../utils/contants";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userInfo: {},
        referral: 'hwf20022'
    },
    reducers: {
        signOut: (state, action) => {
            state.userInfo = {}
            state.isLogin = false
        },
        changeReferral: (state, action) => {
            state.referral = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(onLogin.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.isLogin = true
                    state.userInfo = action.payload.data
                }
            })
            .addCase(loginRemember.fulfilled, (state, action) => {
                state.userInfo = action.payload.data
                state.isLogin = true
            })
            .addCase(onGetProfile.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.userInfo = action.payload.data
                }
            })
    }
})

export const onLogin = createAsyncThunk('user/login', async (user) => {
    const res = await login(user)
    return res
})

export const loginRemember = createAsyncThunk('user/loginRemember', async () => {
    const res = await getProfile()
    return res
})

export const onGetProfile = createAsyncThunk('user/getProfile', async () => {
    const res = await getProfile()
    if (res.status) {
        if (res.data.run === 1) {
            const lastPositionUserJSON = await AsyncStorage.getItem(contants.LAST_POSITION_USER)
            const lastPositionUser = JSON.parse(lastPositionUserJSON)
            if (lastPositionUser) {
                const positionEnd = lastPositionUser.filter(item => item.email === res.data.email)

                await sendPositionEnd({
                    longitudeEnd: positionEnd?.longitude,
                    latitudeEnd: positionEnd?.latitude,
                    ran: positionEnd?.ran
                })
            } else {
                await sendPositionEnd({
                    longitudeEnd: '',
                    latitudeEnd: '',
                    ran: 0
                })
            }
        }
    }
    return res
})

export default userSlice