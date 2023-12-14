import React, { useEffect, useState } from 'react'
import {Avatar} from "@mui/material"
import ImageIcon from "@mui/icons-material/ImageOutlined"
import Event from "@mui/icons-material/EventNote"
import Calender from "@mui/icons-material/CalendarViewDay"
import axios from '../axios'
function Post() {
  const [message, setMessage] = useState();
  const [uploadedData, setUploadedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
        "Content-Type": "application/json",
        },
      };

      const { response } = await axios.post('/api/upload',{
        message : message
      },config);

      console.log(response)
      setUploadedData(response);
      setMessage('');

    } catch (error) {
      console.error('Error uploading data:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex h-fit border-[1px] rounded-lg py-2 px-3 w-full flex-col bg-white shadow-sm'>
        <div className='h-1/2 flex flex-row w-full'>
          <Avatar className='m-1' sx={{ width: 50, height: 50 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>
          <input className='outline-none border-[1px] bg-gray-100 text-gray-900 border-gray-400 m-1 rounded-full w-full pl-4' 
          onChange={handleInputChange} value={message} type="text" placeholder="Start a post" />
        </div>
        <div className='flex w-full flex-row justify-around'>
          <div className='flex flex-row items-center w-fit cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
              <ImageIcon className='text-blue-400' fontSize='medium'/>
              <p className='text-gray-500 p-1 text-sm'>Media</p>
          </div>
          <div className='flex flex-row items-center w-fit cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
              <Event className='text-orange-400' fontSize='medium'/>
              <p className='text-gray-500 p-1 text-sm'>Event</p>
          </div>
          <div className='flex flex-row items-center w-fit cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
              <Calender className='text-red-400' fontSize='medium'/>
              <p className='text-gray-500 p-1 text-sm'>Write article</p>
          </div>
        </div>
        <p className='py-1'>{uploadedData}</p>
      </div>
    </form>
  )
}

export default Post