import ApiRequest from '../request';

export const getPlanets = async (page, keyword) => {
    let result = [];
    await ApiRequest.get(`${process.env.REACT_APP_API_URL}planets/?search=${keyword}&page=${page}`).then(res => {
        result = res
    }).catch(err => {
        result = null;
    });
    return result;
}

export const getPlanetDetail = async (id) => {
    let result = [];
    await ApiRequest.get(`${process.env.REACT_APP_API_URL}planets/${id}/`).then(res => {
        result = res
    }).catch(err => {
        result = null;
    });
    return result;
}