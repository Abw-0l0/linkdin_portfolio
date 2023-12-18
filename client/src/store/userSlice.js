import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios'
import setAuthToken from '../auth/authService'

const userData = localStorage.getItem("user")!==null ? JSON.parse(localStorage.getItem("user")):{email: "", token: "", userId: "", username: ""} 

export const login = createAsyncThunk('/login',async(user)=>{
    const res = await axios.post("/user/login",user);
    console.log(res.data);
    return res.data;
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData
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
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
      localStorage.setItem('user', JSON.stringify({ email: payload.email, token: payload.token, userId: payload.userId, username: payload.username}))
      setAuthToken(payload.token)
      console.log(payload.token);
    })
  },

});

export const userActions = userSlice.actions;
export default userSlice;
