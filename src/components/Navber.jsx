import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../images/logo.png"
import ham from '../images/menu.svg'

const Navber = ({navlinks}) => {
  return (
    <>
      <header className='flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0'>
        <nav className='travigo-container flex items-center justify-between'>
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="logo" className='w-22 h-9 object-fill' />
          </NavLink>
          <ul className='flex items-center gap-7 lg:hidden'>
            {navlinks?.map((item,index)=>{
              return(
                <li key={index}>
                  <NavLink className=" text-lg text-slate-900" to={item.id}>{item.link}</NavLink>
                </li>
              )
            })}
          </ul>

          <ul className='lg:hidden'>
            <li>
              <button className='button-emrald ' type='button'>Join us</button>
            </li>
          </ul>

          <ul className=' hidden lg:flex'>
            <li>
              <img src={ham} alt="" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navber