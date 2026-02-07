import React from 'react'
import "./Content.css"
import  icon from '../Content/Cute.gif'
import YesNoButtons from './buttons'

function Content() {
  return (
    <>
   <div className='base'>
    <img className='Icon' src={icon}/>
    <p className='main-text'>I want to show you something</p>
    <p className='estro'>Can I?</p>
      <YesNoButtons/>
   </div>
    </>
  )
}

export default Content
