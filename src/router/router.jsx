import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/dashboard/dashboard'
import About from '../pages/about/about'
import Customer from '../pages/customer/customer'
import Order from '../pages/order/order'
import Product from '../pages/product/product'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="customer" element={<Customer />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
