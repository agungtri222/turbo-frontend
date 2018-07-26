import axios from 'axios'

import config from './configs'

export default axios.create({
    baseURL: config.api.localBaseURL
      ? config.api.localBaseURL
      : config.api.baseURL
})