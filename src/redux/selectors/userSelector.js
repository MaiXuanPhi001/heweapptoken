export const isLoginUserSelector = state => state.user.isLogin

export const userInfoSelector = state => state.user.userInfo

export const emailSelector = state => state.user.userInfo.email

export const referralSelector = state => state.user.userInfo.referral

export const genderSelector = state => state.user.userInfo.gender

export const ranSelector = state => state.user.userInfo.ran.toFixed(2)

export const balanceSelector = state => state.user.userInfo.balance.toFixed(2)