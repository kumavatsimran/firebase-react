import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPost,} from '../Feature/post/PostSlice';

function View({handleEdit}) {
  const {posts,error,loading}=useSelector((state)=>state.post);
    const disptch=useDispatch()
    useEffect(() => {
     disptch(fetchPost());
    }, [disptch]);
    // useEffect(() => {
    //   disptch(fetchPost());
    // }, [disptch]);
    if(loading){
      return <div>...loading</div>
    }
    if(error){
      return <div>{error}</div>
    }
  return (
    <>
<div className="row mt-3 justify-content-center">
  {posts.map((post) => (
    <div className="col-md-4 col-sm-6 col-lg-3 my-3" key={post.id}>
      <div className="card h-100 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title mb-0 text-center">{post.title}</h5>
        </div>
        <div className="card-body d-flex flex-column">
          <p className="card-text text-muted">{post.discribtion}</p>
        </div>
        <div className="card-footer bg-white">
          <div className="d-flex justify-content-between">
            <button
              onClick={() => disptch(deletePost(post.id))}
              type="button"
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(post)}
              type="button"
              className="btn btn-outline-primary"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default View;
