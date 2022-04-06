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