import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import{creatPost, editPost}from "./Feature/post/PostSlice"
import View from './component/View';

function App() {
  const [post, setPost] = useState([]);
  const [editId,setEditId]=useState("")
  const dispatch=useDispatch();
  const handleinput = (e) => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }
  const handleEdit=(post)=>{
    setPost(post)
    setEditId(post.id)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(post);
    if (editId=="") {
      dispatch(creatPost(post))
    }
    else{
      dispatch(editPost(post))
    }
    setPost({})
  }
  return (
    <>
      <div className="container">
      
        <form className='m-auto mt-5' onSubmit={handleSubmit}>
        <h2>ADD POST</h2>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" name='title' onChange={handleinput} value={post.title||""}/>

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">discribtion</label>
            <input type="text" className="form-control" name='discribtion'onChange={handleinput}  value={post.discribtion||""}/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <View handleEdit={handleEdit}/>
      </div>
      

    </>
  );
}

export default App;
