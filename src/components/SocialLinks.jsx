import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child:
        (
          <>
            linkedIn <FaLinkedin size={30} />
          </>
        ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md'
    },

    {
      id: 2,
      child:
        (
          <>
            Github <FaGithub size={30} />
          </>
        ),
      href: 'https://github.com',
      style: 'rounded-tr-md'
    },
    {
      id: 3,
      child:
        (
          <>
            Mail <HiOutlineMail size={30} />
          </>
        ),
      href: 'mailto:emmanuelfanhi@gmail.com',
      style: 'rounded-tr-md'
    },
    {
      id: 4,
      child:
        (
          <>
            Resume <BsFillPersonLinesFill size={30} />
          </>
        ),
      href: '/resumer.pdf',
      style: 'rounded-tr-md',
      download: true,
    }
  ]



  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, child, href, sytle, download}) => (
          <li key={id} className="flex justify-between items-center w-40 h-14 px-4 
        ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-500" >
            <a href={href} className='flex justify-between items-center w-full text-white'
              download={download}
              rel='noreferrer'
              target='_blank'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks