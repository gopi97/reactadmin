import axios from 'axios'
import Customer from './../pages/customer/customer'
import Order from './../pages/order/order';

export async function getUser() {
  let user
  await axios
    .get(`http://localhost:3005/Customers`)
    .then((res) => {
      user = res.data
    })
    .catch((err) => console.log(err))

  return user
}

export async function PutCus(payload={}){
    let order;
    await (axios.put(`http://localhost:3005/Customers/${payload}`))
    .then((res) =>{
        order=res.data;
        console.log(order)
    }

    )

    .catch((err) =>
        console.log(err)
    )

    return order;
}

export function PostData(payload = {}) {
  axios
    .post('http://localhost:3005/Customers', payload, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      // console.log(err)
    })
}
export function PostOrder(payload = {}) {
  axios
    .post('http://localhost:3005/Order', payload, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      // console.log(err)
    })
}

export function del(payload = {}) {
  let id = payload

  axios
    .delete(`http://localhost:3005/Customers/${id}`
    // , payload, {
    //   headers: { 'Content-Type': 'application/json' },
    // }
    )
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
