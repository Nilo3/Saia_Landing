import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"

import links from "../constants"
import { SaiaLogo } from '../assets/saia-logo'

const NavBar = () => {

const [nav, setNav] = useState(false)
console.log(nav);
  return (
    <div className='flex justify-evenly items-center w-[100vw] md:w-full h-24 px-4 text-white bg-transparent sticky opacity-90 z-30 '>
        <Link to="/" className='cursor-pointer mr-52 lg:mr-[40vh] xl:mr-[50vh]'>
            <SaiaLogo width={120} height={50} />
        </Link>
        <ul className='hidden md:flex'>
            {links.map(({id,link, text}) => (
               <li key={id} className='md:px-4 ring-2 ring-inset ml-4 py-2 ring-white rounded-full lg:px-8 xl:px-6  text-md cursor-pointer capitalize font-bold text-gray-300 hover:bg-white hover:text-black'>
                <Link to={link} >
                    {text}
                </Link>   
                </li>
            ))}

        </ul>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id,link, text}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link onClick={()=> setNav(!nav)} to={link} smooth="true" duration={500}>
                    {text}
                    </Link>
                </li>
                 ))}
            </ul>
        )}
    </div>
  )
}

export default NavBar

