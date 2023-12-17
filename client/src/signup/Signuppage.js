import React, { useState } from 'react'
import Signup from './Signup'
import image from '../images/signuppage.jpg'
import Login from './Login'

function Signuppage() {
  const [toggle, setToggel] = useState(true)

  return (
    <div className="grid grid-cols-2 w-full bg-white pt-20">

        <div className='flex flex-col w-full pl-44'>
            <p className="text-7xl font-light text-red-800">Wellcome .!</p>
            {toggle?
            <Signup setToggel={setToggel}/>
            :
            <Login setToggel={setToggel}/>
            }
        </div>

        <div className='w-full h-fit flex pt-14'>
            <img className="rounded-t-lg"
            src={image}
            alt="pic"/>
        </div>
    </div>
  )
}

export default Signuppage
