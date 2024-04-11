'use client'
import React, { useState } from 'react'
import Admin from '../Admin/page'
import Post from '../Post/page'
import Header from './Header'
import Sidebar from './Sidebar'
import SideRes from './SideRes'

const MainPanel = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
   <>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} toggleMenu={toggleMenu}/>
     <Sidebar/>
     <SideRes setShowMenu={setShowMenu} showMenu={showMenu} toggleMenu={toggleMenu}/>
  </>
  )
}

export default MainPanel
