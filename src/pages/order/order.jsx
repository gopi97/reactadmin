import React, { useEffect, useState } from 'react'
import { Orderlist } from '../../api/orders_api'
import Search from '../../assets/icons/search.svg'
import Add from '../../assets/icons/addIcon.svg'
import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import { useNavigate } from 'react-router-dom'
import Edit from '../../assets/icons/Edit.svg'
import Delete from '../../assets/icons/Delete.svg'
import { del } from '../../api/customers_api'

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([])

  useEffect(() => {
    Orderlist()
      .then((res) => {
        setOrders(res)
      })
      .catch((err) => err)
  }, [])

  const add_main = () => {
    navigate('/addNewOrd')
  }
  const editCus = () => {
    navigate('/editOrder')
  }
  const cusDelete = (e) => {
    let cusId = e.target.id
    // setCustomers((customers)=>customers.filter((value,i)=> i!=cusId))
    del(cusId)
    
    console.log(cusId)
  }


  return (
    <div>
      <CommonPageWrap>
        <div className='cus_div'>
        <h2 className='cus_head'>Orders({orders.length})</h2>
        <table>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Customer</th>
              <th>Order Date</th>
              <th>Shipping Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item, id) => {
              return (
                <tr key={id}>
                  <td>{item.Reference}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Amount}</td>
                  <td>{item.Customer}</td>
                  <td>{item.OrderDate}</td>
                  <td>{item.ShippingDate}</td>
                  <td>
                  <span className="edt_del">
                  <img className="edt_icon" onClick={editCus} src={Edit} alt="edit"></img>
                  <img
                    className="del_icon"
                    id={id}
                    onClick={cusDelete}
                    src={Delete}
                    alt="delete"
                  ></img></span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='icon_main'>
              <img className='search_main' src={Search} alt='search'></img>
              <img className='add_main' onClick={add_main} src={Add} alt='add'></img>
        </div>
        </div>
      </CommonPageWrap>
    </div>
  )
}

export default Order
