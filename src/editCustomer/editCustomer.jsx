import CommonPageWrap from '../containers/commonPageWrap/commonPageWrap'
// import './addNewCustomer.css'
import LeftArrow from '../assets/icons/leftArrow.svg'
import { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom';

const EditCustomer = (props) => {
  const location = useLocation();
  let [cusValue, setCusVal] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    id:""
  })
  const [myval, setval] = useState()


  useEffect(()=>{
    setCusVal({...location.state})
  },[])

  const customerOnChange = (e) => {
    let key = e.target.name
    setCusVal({...cusValue,[key]:e.target.value})
  }
  const save_cus_val = () => {
    console.log(location)
    console.log(cusValue  )
  }

  const cusedit = () => {   
  }

  return (
    <div>
    
      <CommonPageWrap>
        <span className="cus_span">Application/Customer</span>
        <div className="cus_div">
          <div className="add_Customer">
            <h3>Customer</h3>
            <form className="cus_form">
              <input
                placeholder="FirstName*"
                name="fname"
                onChange={customerOnChange}
                value={cusValue.fname}
              />
              <input placeholder="LastName*" name="lname" onChange={customerOnChange} />
              <input placeholder="0*" name="reward" onChange={customerOnChange} />
              <input placeholder="Email*" name="email" onChange={customerOnChange} />
              <input placeholder="Mobile*" name="mobile" onChange={customerOnChange} />
            </form>
            <div className="cus_btn">
              <button className="btn_save" onClick={save_cus_val}>
                Save
              </button>
              <button className="btn_back">
                <span className="btn_span">
                  <img
                    className="lftArrImg"
                    src={LeftArrow}
                    alt="leftArrow"
                  ></img>
                  Back
                </span>
              </button>
            </div>
          </div>
        </div>
      </CommonPageWrap>
    </div>
  )
}
export default EditCustomer;