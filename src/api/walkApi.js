import axiosInstance from "./axios"

export const getRan = async () => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/getRan', {})
        return res
    } catch (error) {
        return { status: false }
    }
}

export const sendPositionStart = async (position) => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/runOn', position)
        return res
    } catch (error) {
        return { status: false }
    }
}

export const sendPositionUpdate = async (position) => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/updateRun', position)
        return res
    } catch (error) {
        return { status: false }
    }
}

export const sendPositionEnd = async (position) => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/runOff', position)
        return res
    } catch (error) {
        return { status: false }
    }
}

export const getAllRun = async () => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/getRun', { limit: 10, page: 1 })
        return res
    } catch (error) {
        return { status: false }
    }
}

export const distanceDetail = async (idRun) => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/getDetailRun', { idRun })
        return res
    } catch (error) {
        return { status: false }
    }
}