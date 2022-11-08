import axiosInstance from "./axios"
import { fetchPOST } from "./fetchConfig"

export const login = async (user) => {
    try {
        const response = await fetchPOST('/api/user/login', user)
        const res = await response.json()
        return {...res, error: false}
    } catch (error) {
        return { error: true}
    }
}

export const signUp = async (user) => {
    try {
        const res = await axiosInstance.post('/api/user/signup', user)
        return res
    } catch (error) {
        return { status: false, message: 'You must send an email to authenticate' }
    }
}

export const sendMailSignUp = async (email) => {
    try {
        const res = await axiosInstance.post('/api/user/sendMailSignUp', email)
        return res
    } catch (error) {
        return { status: false }
    }
}

export const sendMailForgotPasswordOTP = async (email) => {
    try {
        const res = await axiosInstance.post('/api/user/sendMailForgotPasswordOTP', { email })
        return res
    } catch (error) {
        return { status: false, message: 'Email does not exist' }
    }
}

export const changePassword = async (changePassword) => {
    try {
        const res = await fetchPOST('/api/user/changePassword', changePassword)
        return await res.json()
    } catch (error) {
        return { status: false, message: 'Has an error please again' }
    }
}

export const forgotPassword = async (user) => {
    try {
        const res = await axiosInstance.post('/api/user/forgetPasswordOTP', user)
        return res
    } catch (error) {
        return { status: true, message: 'Email verification code is incorrect' }
    }
}

export const getProfile = async () => {
    try {
        const res = await axiosInstance.post('/api/user/getProfile', {})
        return res
    } catch (error) {
        return { status: false }
    }
}

export const support = async (message) => {
    try {
        const res = await axiosInstance.post('/api/binaryOption/addMessageUser', message)
        return res
    } catch (error) {
        return { status: false, message: 'Has an error please again' }
    }
}

export const rewardHistory = async () => {
    try {
        const res = await axiosInstance.post('/api/binaryOption/getCommission', { limit: 10, page: 1 })
        return res
    } catch (error) {
        return { status: false, message: 'Has an error please again' }
    }
}

export const deleteAccount = async () => {
    try {
        const res = await axiosInstance.post('/api/user/removeAccount', {})
        return res
    } catch (error) {
        return { status: false, message: 'Has an error please again' }
    }
}

