import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios'
import setAuthToken from '../auth/authService'

const userData = localStorage.getItem("user")!==null ? JSON.parse(localStorage.getItem("user")):{email: "", token: "", userId: "", username: ""} 
const config = {
  headers:{
      authorization: `Bearer ${userData.token}`,
  }
};

export const signup = createAsyncThunk('/signup',async(user)=>{
  const res = await axios.post("/user/signup",user);
  return res.data;
})

export const login = createAsyncThunk('/login',async(user)=>{
    const res = await axios.post("/user/login",user);
    return res.data;
})

export const posts = createAsyncThunk('/posts',async(data)=>{
  const res = await axios.post("/post/posts",data);
  return res.data;
})

export const feed = createAsyncThunk('/feed',async(data)=>{
  const res = await axios.get("/post/posts",data);
  return res.data;
})

export const like = createAsyncThunk('/like',async(data)=>{
  const res = await axios.post("/post/like",data);
  return res.data;
})

export const comment = createAsyncThunk('/comment',async(data)=>{
  const res = await axios.post("/post/comment",data);
  return res.data;
})

export const deleteComment = createAsyncThunk('/deletecomment',async(data)=>{
  const res = await axios.post("/post/deletecomment",data);
  return res.data;
})

export const deletePost = createAsyncThunk('/deletepost',async(data)=>{
  const res = await axios.post("/post/deletepost",data);
  return res.data;
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData,
    postAlert: "",
    feedAlert: "",
    feed: []
  },
  reducers: {
    setUser(state, action){
        state.user = action.payload
    },
    clearUser(state, action){
      state.user = {email: "", token: "", userId: "", username: ""}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      console.log(payload)
    })
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify({ email: payload.email, token: payload.token, userId: payload.userId, username: payload.username}))
      setAuthToken(payload.token)
    })
    builder.addCase(posts.fulfilled, (state, { payload }) => {
      if(payload.error){
        state.postAlert = "Error: Failed to create post"
      } else {
        state.postAlert = "Success: Post created"
      }
    })
    builder.addCase(feed.fulfilled, (state, { payload }) => {
      if(payload.error){
        state.feedAlert = "Error: Error fetching posts"
      } else {
        state.feed = payload
      }
    })
    builder.addCase(like.fulfilled, (state, { payload }) => {
      // console.log("extrareducer:", payload);
    })
    builder.addCase(comment.fulfilled, (state, { payload }) => {
      console.log("extrareducer:", payload);
    })
  },

});

export const userActions = userSlice.actions;
export default userSlice;
