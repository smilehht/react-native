const api = {
    get(params) {
        let {url, data = {}, headers = {} } = params

        return new Promise((resolve, reject) => {
            fetch(url, {
                credentials: 'include', // 解决CORS跨域问题
                headers: {
                    ...headers
                },
            })
            .then(response => {
                return response.json()
            })
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    async post(params) {
        let {url, data = {}, headers = {} } = params
        return new Promise((resolve, reject) => {
            fetch(url, {
                body: JSON.stringify(data),
                method:'POST',
                headers: {
                    'Accept':'application/json', // 接收json
                    'content-type': 'application/json',
                    ...headers
                },
                credentials: 'include'
            })
            .then(response => response.json())
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject()
            })
        })
    }
}

export default api;