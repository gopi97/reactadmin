import React, { useState,useEffect } from "react";
import CommonPageWrap from "../../containers/commonPageWrap/commonPageWrap";
import { getUser } from "../../api/customers_api";


 const SearchComponent = () =>{


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
    )
}

export default SearchComponent;