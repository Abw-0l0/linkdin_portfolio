import React from 'react'
import {Avatar} from "@mui/material"
import { FaPlus } from 'react-icons/fa'

function Profiles({platform,link,logo,username}) {
  return (
    <div className='flex flex-row w-full py-2'>
        <div className='flex flex-row'>
            <Avatar className='mb-2' sx={{ width: 48, height: 48 }} src={logo}/>
        </div>
        <div className='flex flex-col w-full text-gray-500 items-start px-2'>
            <h2 className='text-md font-semibold text-gray-700 whitespace-nowrap'>{username}</h2>
            <h4 className='text-xs text-gray-400'>{platform}</h4>
            <a href={link} target="_blank" rel="noreferrer">
                <button className='border-2 border-gray-400 mt-2 py-1 px-4 rounded-full flex flex-row items-center hover:bg-gray-200'>
                    <FaPlus className='pr-1' />Follow
                </button>
            </a>
        </div>
    </div>
  )
}

export default Profiles
