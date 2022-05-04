import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react'
import { PostData, getUser, del,PutCus } from '../../api/customers_api'
import './customer.css'
import Edit from '../../assets/icons/Edit.svg'
import Delete from '../../assets/icons/Delete.svg'
import Search from '../../assets/icons/search.svg'
import Add from '../../assets/icons/addIcon.svg'
import { useNavigate } from 'react-router-dom'




const Customer = (props) => {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getUser()
      .then((res) => {
        setCustomers(res)
      })
      .catch((err) => console.log(err))
  }, [])

  const cusDelete = (e) => {
    let cusId = e.target.id
    setCustomers((customers)=>customers.filter((value,i)=> i!=cusId))
    del(cusId)
    
    console.log(cusId)
  }

  const add_main = () => {
    navigate('/addNewCus')
  }

    const editCus = (e) => {
      let d = e.target.id;
      let edit = customers[d];
      // PutCus(d)
      console.log(edit)
      navigate('/editCus',{state:edit})
    }

    const search_comp = () => {
     
    }

  return (
    <div>
      <CommonPageWrap>
        <div className="cus_div">
          {<h2 className="cus_head">Customers({customers.length})</h2>}
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Membership</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((value, id) => {
                return (
                  <tr key={id}>
                    <td>{value.fname}</td>
                    <td>{value.lname}</td>
                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                    <td>{value.reward}</td>
                    <td >
                      <img className="edt_icon" id={id} value={customers} onClick={editCus} src={Edit} alt="edit"></img>
                      <img
                        className="del_icon"
                        id={value.id}
                        // onClick={()=>cusDelete(value.id)}
                        onClick={cusDelete}
                        src={Delete}
                        alt="delete"
                      ></img>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='icon_main'>
              <img className='search_main' onClick={search_comp} src={Search} alt='search'></img>
              <img className='add_main' onClick={add_main} src={Add} alt='add'></img>
        </div>
        </div>
       
       
      </CommonPageWrap>
      <div className='pagenumber'> <Stack spacing={2}>
      <Pagination count={10} />
      </Stack></div>
    </div>
  )
}

export default Customer
