import React, { useState } from 'react'
import {Avatar} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { comment, deleteComment } from '../store/userSlice';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Comments({post,newFeed,setNewFeed}) {
    const dispatch = useDispatch();
    const [deleteToggel, setDeleteToggel] = useState();
    const user = useSelector((state) => state.user);
    const [visibleComments, setVisibleComments] = useState(2);
    const [commentPost, setCommentPost] = useState({
        userId:"",
        postId:"",
        text:""
    })
    const [delet, setDelet] = useState({
        postId:"",
        commentId:""
    })
            
    const handleSubmit = (e) => {
        e.preventDefault()

        if(commentPost.text.length > 0){
            commentPost.userId = user.user.userId;
            commentPost.postId = post._id;
        }
        
        console.log(post)
        if((commentPost.userId.length && commentPost.postId.length && commentPost.text.length) > 0) {
            dispatch(comment(commentPost)).then(()=> {
                setNewFeed(!newFeed);
                setCommentPost({ ...commentPost, text: "" })
            })
        }
    }

    const handleToggle = (i) => {
        setDeleteToggel((prevToggle) => (prevToggle === i ? null : i))
    }

    const commentDelete = (i,a) => {
        delet.postId = post._id;
        delet.commentId = i;
        if(user.user.userId === a.user._id){
            dispatch(deleteComment(delet)).then(() => {
                setNewFeed(!newFeed);
            });
        }
    }

    const handleLoadAllComments = () => {
        setVisibleComments(post.comments.length);
    };

    return (
    <form onSubmit={handleSubmit} className='w-full'>
        <div className='bg-white flex flex-col w-full px-3'>
            <div className='flex flex-row w-full my-1'>
                <Avatar className='m-1' sx={{ width: 35, height: 35 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>
                <input className='outline-gray-400 border-[1px] text-gray-900 border-gray-400 m-1 rounded-full w-full pl-4' autoComplete="off"
                value={commentPost.text} onChange={(e) => setCommentPost({ ...commentPost, [e.target.name]: e.target.value })} name='text' type="text" placeholder="Add a comment..."/>
            </div>

            {(post.comments.length > 0) ?
            post.comments.slice(0, visibleComments).map((a,i) => (
                <div className='flex flex-row w-full my-1' key={i}>
                    <Avatar className='m-1' sx={{ width: 35, height: 35 }} src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"/>

                    <div className='flex flex-col bg-gray-100 w-full p-1 px-2 rounded-r-md rounded-b-md'>
                        <div className='flex w-full flex-row justify-between'>
                            <div className='flex flex-col w-full'>
                                <h2 className='text-sm font-semibold text-gray-700 whitespace-nowrap'>{a.user.username}</h2>
                                <h4 className='text-xs -mt-[2px] text-gray-400'>Bio</h4>
                            </div>
                            <MoreHorizIcon onClick={() => handleToggle(a._id)} className='text-gray-500 cursor-pointer'/>
                            {(deleteToggel===a._id)?
                                <div className="relative">
                                  <div className="absolute bg-white right-0 mt-5 border-[2px] shadow-md w-fit h-fit rounded-sm">
                                    <p onClick={()=> commentDelete(a._id,a)} className="px-2 hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700">Delete</p>
                                  </div>
                                </div>
                          :<></>}
                        </div>  
                        <div className='flex flex-row w-full py-1'>
                            <p className='text-xs text-gray-700'>{a.text}</p>
                        </div>
                    </div>
                </div>
            ))
            :
            <></>}
            {visibleComments < post.comments.length && (
                <button className='self-start cursor-pointer hover:text-gray-600 p-2 text-gray-400 text-sm font-semibold' onClick={handleLoadAllComments}>
                Load more comments
                </button>
            )}
        </div>
    </form>
)
}

export default Comments
