import CommonPageWrap from '../containers/commonPageWrap/commonPageWrap'
import './addNewOrder.css'
import LeftArrow from '../assets/icons/leftArrow.svg'
import { useState } from 'react';
import { PostOrder } from '../api/customers_api';

const AddNewOrder = () => {

  const [ordValue,setOrdVal] = useState([]);
  const [myval, setval] = useState([])

  const ordONCng = (e) => {
    let ordName = e.target.name;
    let ordVal = e.target.value;
    setval({...myval,[ordName]:ordVal});
    console.log(myval)
  }
  const save_Ord_Value = () => {
    let ordState = [...ordValue];
    ordState.push(myval);
    PostOrder(myval)
    setOrdVal(myval)
    console.log(ordValue)
  }
    return (
        <CommonPageWrap>
          <div className="cus_div">
            <span className="cus_span">Application / Customer</span>
            <div className="add_Customer">
              <h3>Order</h3>
              <form className='cus_form'>
                <input placeholder='FirstName*' name='Reference' onChange={ordONCng}/>
                <input placeholder='LastName*' name='Quantity' onChange={ordONCng}/>
                <input placeholder='0*' name='Amount' onChange={ordONCng}/>
                <input placeholder='Email*' name='Customer' onChange={ordONCng}/>
                <input placeholder='Mobile*' name='OrderDate' onChange={ordONCng}/>
                <input placeholder='ShippingDate*' name='ShippingDate' onChange={ordONCng}/>
              </form>
              <div className='cus_btn'>
              <button className='btn_save' onClick={save_Ord_Value}>Save</button>
              <button className="btn_back"> <span className='btn_span'>
              <img className='lftArrImg' src={LeftArrow} alt="leftArrow"></img>Back
              </span></button>
              </div>
            </div>
          </div>
        </CommonPageWrap>
    )
}

export default AddNewOrder;