import React, { useState } from 'react'
import axios from '../axios'

function Signup({setToggel}) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    const [confirmpass, setConfirmpass] = useState('')
    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr(null)

        if(formData.password === confirmpass){
            try {
              const response = await axios.post('/user/signup', formData);
          
              console.log('Signup successful:', response.data);
            } catch (error) {
              console.error('Error during signup:', error.response.data.error);
              setErr(error.response.data.error)
            }
        } else {
            console.log("pass didn't matched")
        }
      
    };

    const action = () => {
        setToggel(false)
    }

    return (
    <div className="flex flex-col items-center w-10/12 justify-start pt-5">
        <p className='text-red-600'>{err}</p>
        <form onSubmit={handleSubmit} className='w-full'>
            <label htmlFor="username" className="block text-sm font-medium pb-1">Username</label>
            <input type="text" id="username" name="username"
                value={formData.username}
                onChange={handleChange}
                className=" mt-1 p-2 w-full border h-14 hover:bg-gray-200 border-1 border-gray-700 rounded-md" required />

            <label htmlFor="email" className="block text-sm font-medium pt-4 pb-1">Email</label>
            <input type="email" id="email" name="email"
              value={formData.email}
              onChange={handleChange}
              className=" mt-1 p-2 w-full border h-14 hover:bg-gray-200 border-1 border-gray-700 rounded-md" required />

            <label htmlFor="password" className="block text-sm font-medium pt-4 pb-1">Password</label>
            <input type="password" id="password" name="password"
              value={formData.password}
              onChange={handleChange}
              className=" mt-1 p-2 w-full border h-14 hover:bg-gray-200 border-1 border-gray-700 rounded-md" required />

            <label htmlFor="confirmPassword" className="block text-sm font-medium pt-4 pb-1">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword"
              value={confirmpass}
              onChange={(e)=> setConfirmpass(e.target.value)}
            className=" mt-1 p-2 w-full border h-14 hover:bg-gray-200 border-1 border-gray-700 rounded-md" required />
            <button type="submit" className="w-full bg-blue-600 text-white mt-5 py-4 px-4 rounded-full hover:bg-blue-800">
                Sign Up
            </button>
        </form>
        <p onClick={action} className='self-start py-2 font-semibold hover:font-bold cursor-pointer text-sm'>Already signed !</p>
    </div>
  )
}

export default Signup
