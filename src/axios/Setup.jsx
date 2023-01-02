import axios from "axios";
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});
instance.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log("@=======?", error.response.status);
    
    error.response.status === 401 && alert(error.response.data.message ? error.response.data.message : 'Unauthorized User');
    error.response.status === 403 && alert(error.response.data.message ? error.response.data.message : 'Access Forbidden');
    error.response.status === 409 && alert(error.response.data.message ? error.response.data.message : 'Already exits');
    error.response.status === 500 && alert('Server Error');

    return Promise.reject(error);
});

export default instance;
