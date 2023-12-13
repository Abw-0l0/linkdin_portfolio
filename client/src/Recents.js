import React from 'react'
import CommitIcon from '@mui/icons-material/Commit';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + '...';
    }
  };

function Recents({title,url}) {
  return (
    <div onClick={() => url} className='flex flex-row items-center py-[2px] pl-3 hover:bg-gray-100 cursor-pointer'>
      <CommitIcon fontSize='small' className='text-gray-800'/>
      <p className='text-xs text-gray-500 whitespace-nowrap pl-1 font-medium'>{truncateText(title, 31)}</p>
    </div>
  )
}

export default Recents
