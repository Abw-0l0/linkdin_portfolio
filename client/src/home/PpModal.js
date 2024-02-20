import React, { useState } from 'react'
import Avatar from 'react-avatar-edit'
import { useDispatch, useSelector } from 'react-redux';
import { userpp } from '../store/userSlice';
import URL from '../functions/Url';
import { base64StringToBlob } from 'blob-util';

function PpModal({ppModal, setppModal}) {
    const [imgCrop, setimgCrop] = useState();
    const [storeImage, setstoreImage] = useState([]);
    const [ppToggle, setppToggle] = useState(true);
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    const formData= new FormData();
    const inputFileRef = React.createRef();

    const closeModal = () => {
        setppModal(!ppModal);
    }

    const onCrop = (view) => {
        setimgCrop(view)
    }

    const onClose = () => {
        setimgCrop(null)
    }

    const saveImage = async (e) => {
        e.preventDefault()

        // setstoreImage([...storeImage,{imgCrop}])
        setppToggle(!ppToggle);

        if (imgCrop) {
            // Convert base64 data to Blob
 
            const contentType = 'image/png';
            const b64Data = imgCrop.split(',')[1];
            
            const blob = base64StringToBlob(b64Data, contentType);

            // Create a File object
            const file = new File([blob], "avatar.png", { type: 'image/png' });
      
            // Append the File object to FormData
            // console.log(imgCrop);
            console.log(imgCrop);
            formData.append('photo', file);
      
            if (user.user.userId) {
              formData.append('userId', user.user.userId);
            }
            if (user.user.userId) {
                dispatch(userpp(formData)).then(() => {
                  console.log(formData);
                });
            }      
        }
    }

    let profileImageShow = storeImage.map(item=>item.imgCrop)

    const handleppToggle = () => {
        profileImageShow = null
        setstoreImage([])
        setppToggle(!ppToggle);
    }

    const handleFileInputChange = (e) => {
        const fileInput = inputFileRef.current;
        const file = fileInput.files[0];

        if (file) {
          console.log('Selected file:', file);
        }
      };

    return (
    <div className="flex">
    <form onSubmit={saveImage} encType='multipart/form-data'>

    <div className='absolute top-0 left-0 right-0 w-full h-full'>
        <div className='flex justify-center w-full h-full'>
            <div className='bg-white w-1/2 mt-8 z-40 h-3/5 rounded-xl overflow-hidden flex flex-col'>

                <div className='relative self-end h-fit w-fit'>
                    <p onClick={closeModal} className='text-gray-500 hover:bg-gray-200 p-1 px-3 rounded-full h-fit font-medium cursor-pointer text-xl'>X</p>
                </div>
                
                {ppToggle?
                    <div className='flex w-full h-4/5 flex-row justify-center items-center'>
                        <img className='w-[300px] h-[300px] rounded-full object-cover'
                        src={user.user.photo !== "" ? `${URL}/uploads/users/` + user.user.photo : "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"}
                        alt='Cropped' />
                    </div>
                :
                <>
                    <div className='flex w-full h-4/5 flex-row justify-center items-center'>
                        <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                    </div>
                    <div className='relative'>
                        <input ref={inputFileRef} className='absolute -top-[999px]' type='file' id="file-upload" name='photo' accept='image/*' 
                        onChange={handleFileInputChange} />
                    </div>
                </>
                }

                <div className='flex flex-col w-full h-1/5 items-end justify-center px-8'>
                    {ppToggle?
                        <span onClick={handleppToggle}
                        className="w-fit bg-blue-600 text-white px-4 py-1 font-semibold rounded-full h-fit hover:bg-blue-800">
                            Add photo
                        </span>
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

    </form>
    </div>
  )
}

export default PpModal
