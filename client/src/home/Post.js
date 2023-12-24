import React, { useRef, useState } from 'react'
import {Avatar} from "@mui/material"
import ImageIcon from "@mui/icons-material/ImageOutlined"
import Event from "@mui/icons-material/EventNote"
import Calender from "@mui/icons-material/CalendarViewDay"
import PostModal from './PostModal'
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../store/userSlice'
import Alert from '../assets/Alert'

function Post({modal, setModal,setNewFeed,newFeed}) {
  const [alertt, setAlertt] = useState();
  const [alerttToggle, setAlerttToggle] = useState(false);
  const inputRef = useRef();
  const [image, setImage] = useState()
  const [image0, setImage0] = useState()
  const inputKey = useRef(0);
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const postAlert = useSelector((state) => state.user.postAlert);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData= new FormData();

    if(image){
      formData.append("photo", image0)
    }
    if(caption!==""){
      formData.append("caption",caption)
    }
    if(user.user.userId){
      formData.append("userId",user.user.userId)
      if(user.user.token.length > 3 && (caption!=="" || image)){
        dispatch(posts(formData)).then(() => {

          setModal(!modal)
          setNewFeed(!newFeed)
          setCaption("");

          setImage(null);
          inputKey.current += 1;
        })
      } else {
        // alert("select photo or add caption")
        setAlertt("select photo or add caption")
        setAlerttToggle(true)
        }
    } else {
      alert("user not logged in.!")
    }
  };

  const postModal = () => {
    if(user.user.token.length < 3){
      setAlertt("Login to make a post!")
      setAlerttToggle(true)
    } else {
      setModal(!modal);
    }
  }

  const ImageIconClick = () => {
    if(user.user.token.length < 3){
      setAlertt("Login to make a post!")
      setAlerttToggle(true)
    } else {
      setModal(!modal);
      inputRef.current.click();
    }
  }

  const handleImageChange = (event) => {
    setImage0(event.target.files[0]);
    const files = event.target.files;

    if (files.length === 1) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null);
      alert('Please select only one image.');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
      <Alert alert={alertt} alerttToggle={alerttToggle} setAlerttToggle={setAlerttToggle} />
      <div className='flex h-fit border-[1px] rounded-lg py-2 px-3 w-full flex-col bg-white shadow-sm'>
        <div className='h-1/2 flex flex-row w-full'>

          <div className='relative'>
            <input ref={inputRef} className='absolute -top-[999px]' type='file' id="file-upload" name='photo' accept='image/*' 
              onChange={handleImageChange} key={inputKey.current}/>
          </div>

          <Avatar className='m-1' sx={{ width: 50, height: 50 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>
          <input className='outline-none cursor-pointer caret-transparent hover:bg-gray-200 border-[1px] bg-gray-100 text-gray-900 border-gray-400 m-1 rounded-full w-full pl-4' 
          onClick={postModal} value="" type="text" placeholder="Start a post" readOnly/>
          {modal && <PostModal caption={caption} setCaption={setCaption} inputKey={inputKey} image={image} setImage={setImage} handleSubmit={handleSubmit} inputRef={inputRef} setModal={setModal} modal={modal}/>}
        </div>
        <div className='flex w-full flex-row justify-around'>
          <div onClick={ImageIconClick} className='flex flex-row items-center w-fit cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
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
      </div>
    </form>
  )
}

export default Post
