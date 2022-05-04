import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import React, { useEffect, useState } from 'react'
import { Productlist } from '../../api/orders_api'
import Search from '../../assets/icons/search.svg'
import Add from '../../assets/icons/addIcon.svg'
import { useNavigate } from 'react-router-dom'
import Edit from '../../assets/icons/Edit.svg'
import Delete from '../../assets/icons/Delete.svg'
import { del } from '../../api/customers_api'

const Product = () => {
  const navigate = useNavigate();
  const [product, setproduct] = useState([])

  useEffect(() => {
    Productlist()
      .then((res) => {
        setproduct(res)
      })
      .catch((err) => err)
  }, [])

  const add_main = () => {
    navigate('/addNewPdt')
  }
  const editCus = () => {
    navigate('/editProduct')
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
      <h2 className='cus_head'>Product({product.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Price</th>
            <th>Total In Stock</th>
            <th>	Actions</th>
          </tr>
        </thead>

        <tbody>
          {product.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.ProductName}</td>
                <td>{item.CategoryName}</td>
                <td>{item.Price}</td>
                <td>{item.TotalinStock}</td>
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

export default Product
