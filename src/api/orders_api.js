import axios from 'axios'

export async function Orderlist() {
  let order
  await axios
    .get(`http://localhost:3005/Order`)
    .then((res) => {
      order = res.data
    })

    .catch((err) => console.log(err))

  return order
}
export async function Productlist() {
  let Product
  await axios
    .get(`http://localhost:3005/Product`)
    .then((res) => {
      Product = res.data
    })

    .catch((err) => console.log(err))

  return Product
}
