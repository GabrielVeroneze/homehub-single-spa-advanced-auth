import { AuthInfo } from './types/AuthInfo'
import Cookies from 'universal-cookie'

export const loginFunction = (email: AuthInfo['email']) => {
    const authId = crypto.randomUUID()
    const cookies = new Cookies(null, { path: '/' })

    cookies.set('auth', { email: email, authId: authId })

    location.replace(`/dashboard/${authId}/`)
}

export const logoutFunction = () => {
    const cookies = new Cookies(null, { path: '/' })

    cookies.remove('auth')

    return location.replace('/')
}

export const checkIsAuthenticated = () => {
    const cookies = new Cookies(null, { path: '/' })

    const auth = cookies.get('auth')

    if (!auth) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    const authObj: AuthInfo = JSON.parse(auth)

    if (!location.pathname.includes(authObj.authId)) {
        return { authInfo: undefined, isAuthenticated: false }
    }

    return { authInfo: authObj, isAuthenticated: true }
}
