import React, { Component } from 'react'
import './style/AppHeader.css'
import BlocNav from '../components/BlocNav.js'


class AppHeader extends Component {
  render() {
    return (
      <div className='app-header'>
        <BlocNav text='Dialogue avec Nadar'/>
        <BlocNav text='Infos points'/>
      </div>
    )
  }
}

export default AppHeader
