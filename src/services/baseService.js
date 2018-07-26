import Http from './http'
// import config from './configs'

class BaseService {
    constructor() {
        this.endPoint = ''
    }

    includeDefault(options) {
        const defaultData = {
            headers: {
                'Content-Type': 'Application/json'
            },
            params: {
                sercret_key: window.localStorage.getItem('secret_key')
            }
        }

        return Object.assign(defaultData, options)
    }

    get(options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.get(this.endPoint, opts)
    }
    
    post(data, options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.post(this.endPoint, data, opts)
    }
    
    postOne(id, data, options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.post(`${this.endPoint}/${id}`, data, opts)
    }
    
    delete(id, options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.delete(this.endPoint + '/' + id, opts)
    }
    
    put(data, options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.put(this.endPoint, data, opts)
    }
    
    putOne(id, data, options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.put(this.endPoint + '/' + id, data, opts)
    }
    
    getOne(id, options = {}) {
        const opts = this.includeDefault(options)
    
        return Http.get(this.endPoint + '/' + id, opts)
    }
}

export default BaseService