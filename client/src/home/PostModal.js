import React from 'react'
import {Avatar} from "@mui/material"
import ImageIcon from "@mui/icons-material/ImageOutlined"
import Event from "@mui/icons-material/EventNote"
import CakeIcon from '@mui/icons-material/Cake';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function PostModal({setModal,modal}) {

    const closeModal = () => {
        setModal(!modal);
    }
  return (
    <div className='absolute top-0 left-0 w-full h-full'>
        <div className='flex justify-center w-full h-full'>
            <div className='bg-white w-1/2 mt-8 z-50 h-3/4 rounded-xl overflow-hidden flex flex-col'>

                <div className='flex w-full h-1/5 flex-row p-5 items-center'>
                    <Avatar className='m-1' sx={{ width: 60, height: 60 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>
                    <div className='flex flex-col w-full text-gray-500 items-start px-2'>
                        <h2 className='text-xl font-semibold text-gray-700 whitespace-nowrap'>Malik Riaz Khan</h2>
                        <h4 className='text-sm text-gray-400'>Post to Anyone</h4>
                    </div>
                    <div className='flex h-full w-fit'>
                        <p onClick={closeModal} className='text-gray-500 hover:bg-gray-200 p-1 px-3 rounded-full h-fit font-medium cursor-pointer text-xl'>X</p>
                    </div>
                </div>

                <div className='flex w-full h-3/5 object-contain p-5'>
                    <textarea
                    className='resize-none outline-none cursor-pointer text-gray-900 text-xl w-full h-full' 
                    type="text" placeholder="What do you want to talk about?" />
                </div>

                <div className='flex flex-col w-full h-1/5'>
                    <div className='flex flex-row space-x-7 w-full h-1/2 items-center px-5'>
                        <ImageIcon className='text-gray-500' fontSize='medium'/>
                        <Event className='text-gray-500' fontSize='medium'/>
                        <CakeIcon className='text-gray-500' fontSize='medium'/>
                        <MoreHorizIcon className='text-gray-500' fontSize='medium'/>
                    </div>
                    <div className='flex flex-row w-full h-1/2 px-5 items-center justify-end border-t-[1px] border-gray-300'>
                        <button type="submit" 
                        className="w-fit bg-blue-600 text-white px-4 py-1 font-semibold rounded-full h-fit hover:bg-blue-800">
                            Post
                        </button>
                    </div>
                </div>

            </div>
        </div>
        <div className='bg-gray-600 opacity-20 absolute top-0 z-40 left-0 w-full h-full'></div>
    </div>
  )
}

export default PostModal
