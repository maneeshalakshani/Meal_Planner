import axios from "axios"

export const deleteCommentById = async (id:any) => {
    try{
        await axios.delete(`http://localhost:8070/comment/delete/${id}`).then((res) => {
            alert("Successfully Deleted")
            window.location.href = "http://localhost:5173/";
        })
    }catch(err){
        console.log("Error", err)
    }
}


export const saveComment = async (comment:any) => {
    axios.post('http://localhost:8070/comment/save', comment, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    }).then((res:any) => {
        window.location.href = "http://localhost:5173/";
    }).catch((err:any) => {
        console.log('err', err)
    })
}

// export const updateCommentById = async (id:any, plan:any) => {
//     await axios.put(`http://localhost:8070/meal/update/${id}`, plan, {
//         headers: {'Content-type': 'multipart/form-data'} 
//     }).then((res) => {
//         alert("Updated Sucessfully");
//         window.location.href = "http://localhost:5173/";
//     }).catch(err => {
//         console.log("Error: ", err)
//     })
// }