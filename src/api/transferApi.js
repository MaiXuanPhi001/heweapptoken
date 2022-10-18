import axiosInstance from "./axios"
import { fetchPOST } from "./fetchConfig"

export const getHistoryTransfer = async () => {
    try {
        const res = await axiosInstance.post('/api/crypto/getHistoryTransfer', {limit: 10, page: 1})
        return res
    } catch (error) {
        return { status: false }
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

