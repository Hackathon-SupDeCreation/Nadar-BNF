import React from 'react'
import './style/BlocNav.css'

const BlocNav = ({text, img}) => (
  <div className="bloc-nav" style={{backgroundImage: `url(${img})`}}>
    <h1>{text}</h1>
  </div>
)
export default BlocNav
