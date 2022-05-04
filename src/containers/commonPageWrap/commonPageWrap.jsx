import NavBar from '../../components/navbar/navbar'
import SideBar from '../../components/sidebar/sidebar'

import './commonPageWrap.css'

import { useState } from 'react'
import SearchComponent from '../../components/searchbar/search'

const CommonPageWrap = (props) => {
  const [showSideBar, setShowSideBar] = useState(true)

  const menuHandler = () => {
    setShowSideBar(!showSideBar)
  }
  const searchHandler = () => {
    setShowSideBar(!showSideBar)
  }

  return (
    <div className="cp-wrap">
      {showSideBar ? <SideBar /> : null}

      <span >
        <NavBar menuHandler={menuHandler} width={showSideBar} />
        {props.children}
      </span>
      <SearchComponent />
    </div>
  )
}

export default CommonPageWrap;