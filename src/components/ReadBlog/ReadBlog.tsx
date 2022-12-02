import React from 'react';
import {Link} from "react-router-dom";
import {GotBlogApi} from "../../types";

interface Props {
  post: GotBlogApi;
  deletePost: React.MouseEventHandler;
  id: string | undefined;
}

const ReadBlog: React.FC<Props> = ({post, deletePost,id}) => {
  return (
    <div className='mt-3 border border-dark p-3'>
      <div className='d-flex justify-content-between'>
        <p className='text-success fw-light'>Created on: {post.date}</p>
        <p className='fw-bold'>Title: {post.title}</p>
      </div>
      <p>Post: {post.text}</p>
      <div className='text-center'>
        <button className='btn btn-primary me-5' onClick={deletePost}>Delete</button>
        <Link to={'/posts/' + id + '/edit'} className='btn btn-info ms-5'>Edit</Link>
      </div>
    </div>
  );
};

export default ReadBlog;