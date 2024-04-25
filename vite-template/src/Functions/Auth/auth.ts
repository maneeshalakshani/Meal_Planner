import axios from 'axios';

  export const register = async (user:any) => {
    axios.post('http://localhost:8070/user/save', user, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    }).then((res:any) => {
      window.location.href = "http://localhost:5173/login";
    }).catch((err:any) => {
        console.log('err', err)
    })
}


export const login = async (email:string, password:string) => {
  axios.get('http://localhost:8070/user/getByEmail/' + email).then((res) => {
      let user = res.data;
      if(user.password == password){
        localStorage.setItem('isLogged', 'true');
        window.location.href = "http://localhost:5173/";
      }else{
        alert("Error")
      }
  }).catch((err) => {
      console.log('Error: ', err)
  })
}

export const logout = async () => {
  localStorage.setItem('isLogged', 'false');
}