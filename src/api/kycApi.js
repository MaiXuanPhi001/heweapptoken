import axiosInstance from "./axios"

export const checkKYC = async () => {
    try {
        const res = await axiosInstance.post('/api/user/checkKycUser', {})
        return res
    } catch (error) {
        return { status: false, message: 'Has an error please again' }
    }
}