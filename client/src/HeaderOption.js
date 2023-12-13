import React from 'react';
import { Avatar } from "@mui/material";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useNavigate } from 'react-router-dom';

function HeaderOption({ avatar,  Icon, title }) {
  const navigate = useNavigate();

  const routeChange = () => {
    if(title==="Home"){
      navigate('/')
    }
    else if(title==="My Network"){
      navigate('/mynetwork')
    }
    else if(title==="Jobs"){
      navigate('/')
    }
    else if(title==="Messaging"){
      navigate('/')
    }
    else if(title==="Notifications"){
      navigate('/')
    }
  }
  return (
    <div onClick={routeChange} className='flex flex-col object-contain items-center w-[80px] py-[10px] text-gray-500 hover:text-black cursor-pointer -mt-1'>
      {Icon && <Icon className='object-contain h-6 w-6'/>}
      {avatar && <Avatar className='object-contain' sx={{ width: 24, height: 24 }} src={avatar} />}
        {title !== "Me" ? 
          <h3 className='text-xs'>{title}</h3> :
          <h3 className='text-xs -mr-1'>{title}<ArrowDropDownOutlinedIcon className='-ml-[2px]' /></h3>
        }
    </div>
  );
}

export default HeaderOption

