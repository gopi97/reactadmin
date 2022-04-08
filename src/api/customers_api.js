import axios from 'axios';


export async function getUser(){
    let user;
    await (axios.get(`http://localhost:3005/Customers`))
    .then((res) =>{
        user=res.data;
    }

    )

    .catch((err) =>
        console.log(err)
    )

    return user;
}

export const DeleteUser = async(id)=>{
    let result1;
    await axios.delete(`http://localhost:3005/Customers${id}`)
    .then((res1) =>{
        console.log(res1.data);
        result1=res1.data;
    })

    .catch((err) =>{
        console.log(err)
    })
    return result1;
}


