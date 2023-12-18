import React, { useEffect, useState } from 'react'
import Signup from './Signup'
import image from '../images/signuppage.jpg'
import Login from './Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Signuppage() {
  const [toggle, setToggel] = useState(true)
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if(user.user.token.length > 3){
      navigate('/')
    }
  },[user])

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
