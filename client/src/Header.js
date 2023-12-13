import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

function header() {
  return (
    <div className='px-9 top-0 sticky flex justify-evenly border-b-[0.1px] border-solid border-gray-300 w-full z-50 h-14 bg-white'>

      <div className="flex  py-[10px]">
        <img className='object-contain h-[34px] mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RYeN56EvozwyyxYGDw4dTu-pbUZyNxnF93zSLUcOlQ&s" alt=""/>

        <div className="p-[10px] flex items-center rounded bg-blue-50">
            <SearchIcon className='text-gray-700 ml-1 mr-2' fontSize='small'/>
            <input className='outline-none border-none bg-transparent w-[230px]' type="text" placeholder="Search" />
        </div>
      </div>

      <div className='flex flex-row'>
        <div className="flex border-gray-200 border-r-[1px]">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={ChatIcon} title='Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOption avatar ="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4" title='Me'/>
        </div>
        <div className='flex items-start px-2'>
          <div className=' flex flex-col object-contain items-center w-[85px] py-[10px] text-gray-500 hover:text-black cursor-pointer -mt-1'>
            <AppsOutlinedIcon className='object-contain h-6 w-6'/>
            <h3 className='text-xs -mr-1'>For Business<ArrowDropDownOutlinedIcon className='-ml-[2px]' /></h3>
          </div>
          <p className='text-center text-[12px] text-lime-900 underline self-center px-3'>Try premium for<br/> PKR0</p>
        </div>
      </div>
    </div>
  )
}

export default header
