import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, fetchPost,} from '../Feature/post/PostSlice';

function View({handleEdit}) {
  const {posts,error,loading}=useSelector((state)=>state.post);
    const disptch=useDispatch()
    useEffect(() => {
     disptch(fetchPost());
    }, [disptch]);
    
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
          <div className="col-3 my-3">
            <div className="card" style={{ width: "18rem" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.discribtion}</p>
                <button
                  onClick={() => disptch(deletePost(post.id))}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button onClick={() => handleEdit(post)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default View;
