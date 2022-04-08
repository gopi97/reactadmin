import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'

import React, { useEffect, useState } from "react";
import { getUser,DeleteUser} from "../../api/customers_api";
import './customer.css';
import axios from 'axios';

const Customer = () => {


  
  const [customers, setCustomers] = useState([]);

  const [val,setval] = useState({});

  const [msg,setmsg] = useState();
  

  

  useEffect(() => {

      getUser().then((res) => {
          console.log(res)
          setCustomers(res)
      })
          .catch((err) => console.log(err))

      

  }, [])

  


const handlechange = (e) => {
    const value = e.target.value;
    const name=e.target.name;
    setval({ ...val, [name]: value });
    console.log(val)

}


const handledelete=(e)=>{
    DeleteUser(e.target.id).then((res1)=>{
      setCustomers(res1);

      getUser().then((res) => {
        console.log(res)
        setCustomers(res)
    })


    })
  }


    // const customeraddval = async (e) => {
    //     e.preventDefault();
    //     const userdata={};

    //     await axios.post(`http://localhost:3005/Customers`,JSON.stringify(userdata))
    //     .then((res) =>{
    //         console.log(res.data);
    //     })
        
    //     .catch((err) =>{
    //         console.log(err)
    //     })
    // }


  return (
    <div>
      <CommonPageWrap>
      {/* <h2>Customers({customers.length})</h2> */}
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
                    {
                        customers.map((item, id) => {
                            console.log(customers)
                            return <tr key={id}>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.Email}</td>
                                <td>{item.Mobile}</td>
                                <td>{item.Membership}</td>
                                <td>
                                    <button >Edit</button>
                                    <button onClick={handledelete}>Delete</button>

                                </td>


                            </tr>

                        })
                    }
                </tbody>

            </table>



            
            <form>




                <table>
                    <tr>

                        <th><label> FirstName:</label><br /></th>
                        <th><label> LastName: </label></th>
                        <th><label> Email: </label></th>
                        <th><label> Mobile: </label></th>
                        <th><label> Membership: </label></th>
                        <th><label>Actions:</label></th>
                    </tr>


                    <tr>
                        <td>   <input type="text"
                            name="sno"
                            placeholder="enter the First name"
                            onChange={handlechange}
                        /></td>




                        <td>
                            <input type="text"
                                name="lasttname"
                                placeholder="enter the last name"
                                onChange={handlechange}
                            /></td>
                        <td>
                            <input type="text"
                                name="email"
                                placeholder="enter the email"
                                onChange={handlechange}
                            /></td>




                        <td>
                            <input type="text"
                                name="age"
                                placeholder="enter the Mobile"
                                onChange={handlechange}
                            /></td>


                        <td> <input type="text" />
                        </td>

                        {/* <td><button onClick={customeraddval}>Add</button></td> */}

                    </tr>
                </table>

            </form>



      </CommonPageWrap>
    </div>
  )
}

export default Customer
