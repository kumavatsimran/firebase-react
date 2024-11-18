import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../api/axiosinstance.js";
// import { startTransition } from "react";

const initialState={
posts:[],
loading:false,
error:null
}

export const creatPost = createAsyncThunk(
    "posts/creatPost",
    async (newPost, { rejectWithValue }) => {
      try {
        let res = await axiosinstance.post("/.js", newPost);
        return { id: res.data.name, ...newPost };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchPost=createAsyncThunk("posts/fetchPost",
  async(_,{rejectWithValue})=>{
    try {
      let res =await axiosinstance.get("/.json");
      return Object.keys(res.data).map((key)=>({
        id:key,
        ...res.data[key],
      }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  });
  export const deletePost=createAsyncThunk("posts/deletePost",
  async(id,{rejectWithValue})=>{
    try {
      await axiosinstance.delete(`/${id}.json`);
      return id
    } catch (error) {
      return rejectWithValue(error.message)
    }
  })
  export const editPost=createAsyncThunk("posts/editPost",async(post,{rejectWithValue})=>{
    try {
      let obj = {
        title: post.title,
        discribtion: post.discribtion,
      };
      await axiosinstance.put(`/${post.id}.json`, obj);
      return post;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  })
const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:(bulider)=>{
        bulider
        .addCase(creatPost.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(creatPost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts.push(action.payload);
          })
          .addCase(creatPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(fetchPost.pending,(state)=>{
            state.loading=true;
            state.error=null
          })
         .addCase(fetchPost.fulfilled,(state,action)=>{
            state.loading=false;
            state.posts=action.payload
          })
          .addCase(fetchPost.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload
          })
           .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(editPost.fulfilled,(state,action)=>{
        state.posts = state.posts.filter((post) => {
          let { id, title, description } = action.payload;
          if (post.id == id) {
            post.title = title;
            post.description = description;
          }
          return post;
        });
      })
    }
});

export default postSlice.reducer;


