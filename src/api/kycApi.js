import axiosInstance from "./axios"
import { fetchPOST } from "./fetchConfig"

export const checkKYC = async () => {
    try {
        const response = await fetchPOST('/api/user/checkKycUser', {})
        const res = await response.json()
        return { ...res, error: false }
    } catch (error) {
        return { error: true, status: false, message: 'Cannot connect to server! please try again' }
    }
}