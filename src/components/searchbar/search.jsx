import React, { useState, useEffect } from 'react'
import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import { getUser } from '../../api/customers_api'
import './search.css'

const SearchComponent = (props) => {
  const [search, setsearch] = useState([])
  const [newsearch, setNewSearch] = useState()
  // const [customers, setCustomers] = useState([])

  useEffect(() => {
    getUser()
      .then((res) => {
        setsearch(res)
      })
      .catch((err) => console.log(err))
  }, [])

<<<<<<< HEAD

    const [search ,setsearch] =useState([]);
    const [newsearch,setNewSearch]= useState();
    // const [customers, setCustomers] = useState([])

    useEffect(() => {
        getUser()
          .then((res) => {
            setsearch(res)
          })
          .catch((err) => console.log(err))
      }, [])


    //   useEffect(() => {
    //     Orderlist()
    //       .then((res) => {
    //         setsearch(res)
    //       })
    //       .catch((err) => console.log(err))
    //   }, [])

    //   useEffect(() => {
    //     Productlist()
    //       .then((res) => {
    //         setsearch(res)
    //       })
    //       .catch((err) => console.log(err))
    //   }, [])




    const handlesearch =(e) =>{
        const value=e.target.value;

        setNewSearch(value);

    }

    return (
        <div>
           
                <input 
                type="text" 
                onChange={handlesearch}/>

                
           
        </div>
=======
  const handlesearch = (e) => {
    let myCont = search.filter(
      (value) =>
        value.fname.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0 ||
        value.lname.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0,
>>>>>>> bc8e0478cbd7936e064e1d366e8a8acb7fdec6ce
    )
    setNewSearch(myCont)
    // console.log(newsearch)
  }

  const submit_Search = () => {
    console.log(newsearch)
  }
  return (
    <div>
    <div className='search_div' >
    <h1 className='search_head'>Search</h1>   
      <input
        id="usrNam"
        placeholder="Fname"
        type="text"
        onChange={handlesearch}
      ></input>
      <input
        id="pwd"
        placeholder="Lname"
        type="text"
        onChange={handlesearch}
      ></input>

      
    <button id="searchBtn" to=""  onClick={submit_Search}>
    Submit
    </button>
    </div>
    </div>
  )
}

export default SearchComponent
