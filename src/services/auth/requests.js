import instance from '../../axios/index'
export  const Login = async (body) => {
    console.log("body",body)
    return await instance.post('/auth/login/', body);
}
