import './sidebar.css'

import CatImg from '../../assets/images/cat.png'
import DownMenu from '../../assets/icons/down-menu.svg'

import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__admin">
        <img className="sidebar__admin-pic" src={CatImg} alt="cat-png"></img>
        <p>Admin</p>
       <img className="down-menu" src={DownMenu} alt="down-menu"></img>
      </div>
      <div>
        <Link className="sidebar__link" to="/">
          <span>DashBoard</span>
        </Link>
        <Link className="sidebar__link" to="/customer">
          <span>Customer</span>
        </Link>
        <Link className="sidebar__link" to="">
          <span>Order</span>
        </Link>
        <Link className="sidebar__link" to="">
          <span>Product</span>
        </Link>
        <Link className="sidebar__link" to="/about">
          <span>About</span>
        </Link>
      </div>
    </div>
  )
}
export default SideBar
