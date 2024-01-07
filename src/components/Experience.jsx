import React from 'react'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import Github from '../assets/github.png'
import Nodejs from '../assets/nodejs.png'
import Reactjs from '../assets/react.png'

const Experience = () => {


    const techs =[
        {
           id:1,
           src: Html,
           title: 'HTML',
           style: 'shadow-orange-500' 
        },
        {
            id:2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500' 
         },
         {
            id:3,
            src: Javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500' 
         },
         {
            id:4,
            src: Reactjs,
            title: 'REACT',
            style: 'shadow-blue-500' 
         },
         {
            id:5,
            src: Nodejs,
            title: 'NODEJS',
            style: 'shadow-green-500' 
         },
         {
            id:6,
            src: Github,
            title: 'GITHUB',
            style: 'shadow-blue-500' 
         }
    ]


  return (

    <div name="eperience" className=' bg-gradient-to-b  from-gray-800 to-black w-full h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto felx flex-col justify-center w-full h-full text-white'>
            <div className=''>
                <p className='text-4xl font-bold border-b-4 border-gray-500  px-2 sm:pt-11 inline'>Experience</p>
                <p className='py-6'>Thes are the technologies I've worked with</p>
            </div>
            <div className='w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                   techs.map(({id, src, title,style})=>(
                      <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                   )) 
                }
              
            </div>
        </div>
    </div>
  )
}

export default Experience