import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: '',
    timeout: 60000,
    validateStatus: status => status >= 200 && status < 300
});

class ApiRequest {
    static get(route, payload = {}) {
        return this.request('GET', route, payload);
    }

    static put(route, payload = {}) {
        return this.request('PUT', route, payload);
    }

    static post(route, payload = {}) {
        return this.request('POST', route, payload);
    }

    static delete(route, payload = {}) {
        return this.request('DELETE', route, payload);
    }

    static patch(route, payload = {}) {
        return this.request('PATCH', route, payload);
    }

    static resolveParams(params) {
        const paramsResult = [];
        Object.keys(params).map(e => paramsResult.push(`${e}=${params[e]}`));
        return paramsResult.join('&');
    }

    static request(method, route, payload = {}) {
        return new Promise((resolve, reject) => {
        let baseHeaders = {
            'Content-Type':
            payload.type === 'form-data'
                ? 'multipart/form-data'
                : 'application/json'
        };
        if(payload.headers) {
            baseHeaders = {...payload.headers};
        }

        apiInstance
            .request({
                url: route,
                method,
                headers: baseHeaders,
                data: payload.body ? payload.body : {}
            })
            .then(res => {
                if (res && res.data) {
                    resolve(res.data);
                } else {
                    reject(
                        new Error({
                            status: false,
                            message: 'Koneksi/Server Bermasalah'
                        })
                    );
                }
            })
            .catch(err => {
                if (err && err.response && err.response.data) {
                    reject(err.response.data);
                } else if (err && err.response) {
                    reject(err.response);
                } else if (err) {
                    reject(err);
                }
            });
        });
    }
}

export default ApiRequest;
