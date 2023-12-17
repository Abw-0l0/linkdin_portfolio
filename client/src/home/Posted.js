import React from 'react'
import {Avatar} from "@mui/material"
import Like from "@mui/icons-material/ThumbUpOutlined"
import Comment from "@mui/icons-material/MessageOutlined"
import Repost from '@mui/icons-material/Loop';
 import Send from "@mui/icons-material/ArrowForwardSharp"
import { FaPlus } from 'react-icons/fa'

function Posted({text}) {
  return (
    <div className='flex h-fit border-[1px] rounded-lg mb-2 pt-2 pb-1 px-3 w-full flex-col bg-white shadow-sm'>

      <div className='h-1/2 flex flex-row w-full items-center'>
        <Avatar className='m-1' sx={{ width: 50, height: 50 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>
        <div className='flex flex-col w-full text-gray-500 items-start px-2'>
            <h2 className='text-md font-semibold text-gray-700 whitespace-nowrap'>Malik Riaz Khan</h2>
            <h4 className='text-xs text-gray-400'>Bio</h4>
        </div>
        <div className='flex text-blue-500 hover:bg-blue-50 rounded-md h-fit w-fit'>
            <button className='py-1 px-2 flex flex-row items-center font-medium'>
                <FaPlus className='pr-1' />Follow
            </button>
        </div>
      </div>

      <div className='flex flex-col w-full pb-1'>
        <div className='flex pb-2'>
          <p className='text-sm text-gray-700 font-normal'>{text}</p>
        </div>
        <div className='flex w-full object-contain'>
          <img className='rounded-lg' src="https://media.licdn.com/dms/image/D4D16AQHfzYQ4t-da2Q/profile-displaybackgroundimage-shrink_350_1400/0/1701505188371?e=1707955200&v=beta&t=3vZ8ONkR9VJIUTnFPXJMB2vPO9avbrqmCNDsBRBwFqQ" alt="" />
        </div>
      </div>

      <div className='flex w-full flex-row space-x-1 justify-around'>
        <div className='flex flex-row items-center w-full justify-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
            <Like className='text-gray-500' fontSize='medium'/>
            <p className='text-gray-500 p-1 text-sm'>Like</p>
        </div>
        <div className='flex flex-row items-center w-full justify-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
            <Comment className='text-gray-500' fontSize='medium'/>
            <p className='text-gray-500 p-1 text-sm'>Comment</p>
        </div>
        <div className='flex flex-row items-center w-full justify-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
            <Repost className='text-gray-500' fontSize='medium'/>
            <p className='text-gray-500 p-1 text-sm'>Repost</p>
        </div>
        <div className='flex flex-row items-center w-full justify-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
            <Send className='text-gray-500' fontSize='medium'/>
            <p className='text-gray-500 p-1 text-sm'>Send</p>
        </div>
      </div>
    </div>
  )
}

export default Posted
