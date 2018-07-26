import BaseService from './baseService'
import router from '../router'

class AuthService extends BaseService {
    constructor() {
        super()
        this.endPoint = '/login'
    }
    
    login(email, password) {
        return this.post({
            email,
            password
        })
    }

    loggedIn() {
        const secretKey = window.localStorage.getItem('secret_key')
        return typeof secretKey == 'string' && secretKey.length > 0
    }

    logout() {
        window.localStorage.clear()

        router.push('/login')
    }
}

export default new AuthService