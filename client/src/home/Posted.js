import React, { useEffect, useState } from 'react'
import {Avatar} from "@mui/material"
import Like from "@mui/icons-material/ThumbUpOutlined"
import Comment from "@mui/icons-material/MessageOutlined"
import Repost from '@mui/icons-material/Loop';
import Send from "@mui/icons-material/ArrowForwardSharp"
import URL from '../functions/Url';
import moment from 'moment'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { deletePost, like } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';
import Comments from './Comments';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Posted({newFeed,setNewFeed,post}) {
  const [agoDate,setAgoDate] = useState();
  const [postDelToggle,setPostDelToggle] = useState(false);
  const [commentSection,setCommentSection] = useState(false);
  const [postid,setpostid] = useState({postId:""});
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const [likedPost, setLikedPost] = useState({
    userId:"",
    postId:""
  })

  useEffect(() => {
    const now = moment();
    const duration = moment.duration(now.diff(moment(post.createdAt)));
    
    if (duration.asSeconds() < 60) {
      setAgoDate(`${Math.round(duration.asSeconds())}s`);
    } else if (duration.asMinutes() < 60) {
      setAgoDate(`${Math.round(duration.asMinutes())}m`);
    } else if (duration.asHours() < 24) {
      setAgoDate(`${Math.round(duration.asHours())}h`);
    } else if (duration.asDays() < 30) {
      setAgoDate(`${Math.round(duration.asDays())}d`);
    } else {
      setAgoDate(moment(post.createdAt).format('MMM D, YYYY'));
    }
  },[])

  const addLike = (e) => {
    e.preventDefault()

    if(user.user.userId && post._id){
      likedPost.userId = user.user.userId
      likedPost.postId = post._id
      dispatch(like(likedPost)).then(()=> {
        setNewFeed(!newFeed);
      })
    }
  }

  const addComment = () => {
    setCommentSection(!commentSection)
  }

  const handlepostDel = (e) => {
    e.preventDefault();

    if(user.user.userId){
      postid.postId = post._id
      dispatch(deletePost(postid)).then(()=> {
        setNewFeed(!newFeed);
        setPostDelToggle(!postDelToggle)
      })
    }
  }

  return (
    <div className='flex h-fit border-[1px] rounded-lg mb-2 pt-2 pb-1 w-full flex-col bg-white shadow-sm'>

      <div className='px-3 h-1/2 flex flex-row w-full items-center'>
        <Avatar className='m-1' sx={{ width: 50, height: 50 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>
        <div className='flex flex-col w-full text-gray-500 items-start px-2 py-1'>
            <h2 className='text-md font-semibold text-gray-700 whitespace-nowrap'>{post.userId.username}</h2>
            <h4 className='text-xs text-gray-400'>Bio</h4>
            <div className='flex flex-row justify-center space-x-1'>
              <h4 className='text-xs text-gray-400'>{agoDate}</h4>
              <FiberManualRecordIcon className='text-gray-600 self-center' sx={{ width: 5, height: 5 }}/>              
              <PublicOutlinedIcon className='text-gray-600' sx={{ width: 15, height: 15 }}/>
            </div>
        </div>
        <div className='flex text-gray-600 rounded-md h-full w-fit '>
          <MoreHorizIcon onClick={() => setPostDelToggle(!postDelToggle)} className='pr-1 cursor-pointer' fontSize='large' />

            {(postDelToggle)?
                <div className="relative">
                  <div className="absolute bg-white right-0 mt-7 border-[2px] shadow-md w-fit h-fit rounded-lg">
                    <p onClick={handlepostDel} className="pr-7 pl-3 py-2 hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700">Delete</p>
                  </div>
                </div>
            :<></>}

            {/* <button className='py-1 px-2 flex flex-row items-center font-medium'> */}
              {/* <FaPlus className='pr-1' />Follow */}
            {/* </button> */}
        </div>
      </div>

      <div className='flex flex-col w-full pb-1'>
        <div className='px-3 flex pb-2'>
          <p className='text-sm text-gray-700 font-normal'>{post.text}</p>
        </div>
        <div className='flex w-full object-contain justify-center max-h-[670px]'>
          <img className='' src={post.photo !== "" ? `${URL}/uploads/` + post.photo : ""} alt="" />
        </div>
      </div>

      <div className='px-3 flex flex-row w-full border-b-[1px] py-1 justify-between'>
        <div className='space-x-1 flex w-fit flex-row'>
          <ThumbUpOffAltTwoToneIcon className='text-gray-700 bg-blue-300 p-[1px] rounded-full' fontSize='small'/>
          <p className="text-xs text-gray-400">{post.likes.length}</p>
        </div>
        <div className='space-x-1 flex w-fit flex-row'>
          <p className="text-xs text-gray-400 hover:underline hover:text-blue-500 cursor-pointer">{post.comments.length} comments</p>
        </div>
      </div>

      <div className='px-3 flex w-full flex-row mt-1 space-x-1 justify-around'>
        <div onClick={addLike} className="flex flex-row items-center w-full justify-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md">
            <Like className='text-gray-500' fontSize='medium' color={`${post.likes.some(like => like.user._id === user.user.userId)? "primary" : "" }`}/>
            <p className={`${post.likes.some(like => like.user._id === user.user.userId)? "text-blue-500" : "text-gray-500" }  p-1 text-sm`}>Like</p>
        </div>
        <div onClick={addComment} className='flex flex-row items-center w-full justify-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-md'>
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
      {commentSection?
        <Comments newFeed={newFeed} setNewFeed={setNewFeed} post={post}/>
      :<></>
      }
    </div>
  )
}

export default Posted
