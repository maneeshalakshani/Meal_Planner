import axios from "axios";

export const getUserWithId = async (id:any) => {
    let user = axios.get(`http://localhost:8070/user/get/${id}`).then((res) => {
        let userWithId = res.data;
        return userWithId;
    }).catch((err) => {
        console.log('Error: ', err)
    })
    return user;
}