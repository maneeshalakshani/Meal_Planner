import axios from 'axios';

export const addMealPlan = async (meal:any) => {
    axios.post('http://localhost:8070/meal/save', meal, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    }).then((res:any) => {
      alert("Success");
    }).catch((err:any) => {
        console.log('err', err)
    })
}


export const getAllMealPlans = async () => {
    let mealPlans = axios.get('http://localhost:8070/meal/getAll').then((res) => {
        let allPlans = res.data;
        return allPlans;
    }).catch((err) => {
        console.log('Error: ', err)
    })
    return mealPlans;
}

export const deletePlan = async (id:any) => {
    try{
        await axios.delete(`http://localhost:8070/meal/delete/${id}`).then((res) => {
            alert("Successfully Deleted")
        })
    }catch(err){
        console.log("Error", err)
    }
}

export const updateMealPlan = async (id:any, plan:any) => {
    await axios.put(`http://localhost:8070/meal/update/${id}`, plan, {
        headers: {'Content-type': 'multipart/form-data'} 
    }).then((res) => {
        alert("Updated Sucessfully");
        // window.location.href = '../admin-viewAllTaxis'
    }).catch(err => {
        console.log("Error: ", err)
    })
}


export const getCommentsWithPlan = async (id:any) => {
    let comments = axios.get(`http://localhost:8070/comment/getAllWithMealPlan/${id}`).then((res) => {
        let allComments = res.data;
        return allComments;
    }).catch((err) => {
        console.log('Error: ', err)
    })
    return comments;
}