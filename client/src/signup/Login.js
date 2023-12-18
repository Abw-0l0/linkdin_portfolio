import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {login} from '../store/userSlice'

function Login({setToggel}) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr(null)

        dispatch(login(formData))

    };

    const action = () => {
        setToggel(true)
    }

    return (
    <div className="flex flex-col items-center w-10/12 justify-start pt-5">
        <form onSubmit={handleSubmit} className='w-full'>
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

            <button type="submit" className="w-full bg-blue-600 text-white mt-5 py-4 px-4 rounded-full hover:bg-blue-800">
                Sign In
            </button>
        </form>
        <p onClick={action} className='self-start py-2 font-semibold hover:font-bold cursor-pointer text-sm'>Sign up !</p>
    </div>
  )
}

export default Login
