import axiosInstance from "./axios"
import { fetchPOST } from "./fetchConfig"

export const getHistoryTransfer = async (data) => {
    try {
        const res = await axiosInstance.post('/api/crypto/getHistoryTransfer', data)
        return { ...res, error: false, page: data.page }
    } catch (error) {
        return { error: true, status: false }
    }
}

export const transfer = async (transfer) => {
    try {
        const res = await fetchPOST('/api/crypto/transfer', transfer)
        return await res.json()
    } catch (error) {
        return { status: false, message: 'Has an error please try again' }
    }
}

export const getCustom = async () => {
    try {
        const res = await axiosInstance.post('/api/moveToEarn/getCustom', { name: 'FEEWITHDRAW' })
        return res
    } catch (error) {
        return { status: false, message: 'Has an error please try again' }
    }
}

export const withdraw = async (data) => {
    try {
        const response = await fetchPOST('/api/crypto/widthdraw', data)
        const res = await response.json()
        return { ...res, error: false }
    } catch (error) {
        return { error: true, status: false }
    }
}

export const getHistoryWidthdraw = async (data) => {
    try {
        const res = await axiosInstance.post('/api/crypto/getHistoryWidthdraw', data)
        return { ...res, error: false, page: data.page }
    } catch (error) {
        return { error: true, status: false }
    }
}


