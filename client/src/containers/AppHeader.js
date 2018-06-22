import React, { Component } from 'react'
import './style/AppHeader.css'
import BlocNav from '../components/BlocNav.js'
import nav1 from '../img/nav1.png'
import nav2 from '../img/nav2.png'
import top from '../img/top.png'

class AppHeader extends Component {
  render() {
    return (
      <div className='app-header'>
     
        {/* <div className='nav1'><BlocNav img={nav1} text='Discussion'/></div> */}
        {/* <div className='nav2'><BlocNav img={nav2} text='Informations'/></div> */}
      </div>
    )
  }
}

export default AppHeader
