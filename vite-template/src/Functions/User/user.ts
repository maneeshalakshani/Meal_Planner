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

export const getAllUsers = async () => {
    let users = axios.get('http://localhost:8070/user/getAll').then((res) => {
        let allUsers = res.data;
        return allUsers;
    }).catch((err) => {
        console.log('Error: ', err)
    })
    return users;
}


export const updateFollowers = async (id:any, newFollower:any) => {
    let updateStatus = await axios.put(`http://localhost:8070/user/update/${id}`, newFollower, {
        headers: {'Content-type': 'multipart/form-data'} 
    }).then((res) => {
        let status = res.data;
        window.location.href = `http://localhost:5173/user/${id}`;
        return status;
    }).catch(err => {
        console.log("Error: ", err)
    })
    return updateStatus;
}