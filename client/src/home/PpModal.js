import React, { useState } from 'react'
// import {Avatar} from "@mui/material"
import Avatar from 'react-avatar-edit'

function PpModal({ppModal, setppModal}) {
    const [imgCrop, setimgCrop] = useState();
    const [storeImage, setstoreImage] = useState([]);
    const [ppToggle, setppToggle] = useState(true);

    const closeModal = () => {
        setppModal(!ppModal);
    }

    const onCrop = (view) => {
        setimgCrop(view)
    }

    const onClose = () => {
        setimgCrop(null)
    }

    const saveImage = () => {
        setstoreImage([...storeImage,{imgCrop}])
        setppToggle(!ppToggle);
    }

    let profileImageShow = storeImage.map(item=>item.imgCrop)

    const handleppToggle = () => {
        profileImageShow = null
        setstoreImage([])
        setppToggle(!ppToggle);
    }

    return (
    <div className="flex">

    <div className='absolute top-0 left-0 right-0 w-full h-full'>
        <div className='flex justify-center w-full h-full'>
            <div className='bg-white w-1/2 mt-8 z-40 h-3/5 rounded-xl overflow-hidden flex flex-col'>

                <div className='relative self-end h-fit w-fit'>
                    <p onClick={closeModal} className='text-gray-500 hover:bg-gray-200 p-1 px-3 rounded-full h-fit font-medium cursor-pointer text-xl'>X</p>
                </div>
                
                {ppToggle?
                    <div className='flex w-full h-4/5 flex-row justify-center items-center'>
                        <img className='w-[300px] h-[300px] rounded-full object-cover'
                        src={(profileImageShow.length)?profileImageShow:"https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"}
                        // 'https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4'
                        alt='' />
                    </div>
                :
                    <div className='flex w-full h-4/5 flex-row justify-center items-center'>
                        <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                    </div>
                }

                <div className='flex flex-col w-full h-1/5 items-end justify-center px-8'>
                    {ppToggle?
                        <button onClick={handleppToggle} type="submit" 
                        className="w-fit bg-blue-600 text-white px-4 py-1 font-semibold rounded-full h-fit hover:bg-blue-800">
                            Add photo
                        </button>
                    :
                        <button onClick={saveImage} type="submit" 
                        className="w-fit bg-blue-600 text-white px-4 py-1 font-semibold rounded-full h-fit hover:bg-blue-800">
                            Save
                        </button>
                    }
                </div>

            </div>
        </div>
        <div className='bg-gray-600 opacity-20 absolute top-0 z-30 left-0 w-full h-full'></div>
    </div>

    </div>
  )
}

export default PpModal
