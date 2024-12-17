import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '1058c5fc80954cf7b81f57c0d1d31994'
    }
})