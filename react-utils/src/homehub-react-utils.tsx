import { AuthInfo } from './types/AuthInfo'
import Cookies from 'universal-cookie'

export const loginFunction = (email: AuthInfo['email']) => {
    const authId = crypto.randomUUID()
    const cookies = new Cookies(null, { path: '/' })

    cookies.set('auth', { email: email, authId: authId })

    location.replace(`/dashboard/${authId}/`)
}
