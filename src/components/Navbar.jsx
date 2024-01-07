
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar = () => {

  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'home'
    },

    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'cantact'
    },
  ]



  return (
    <div className=' flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed '>
      <div>
        <h1 className="text-3xl font-signature ml-2">Emms.<span className='text-blue-300'>Dev</span> </h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 '>
            {link}
          </li>
        ))}

      </ul>

      <div onClick={() => { setNav(!nav) }} className='cusor-pointer pr-4 z-10 text-gray-500 md:hidden'>

        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

          {links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 '>
              {link}
            </li>
          ))}


        </ul>
      )}



    </div>

  )
}

export default Navbar