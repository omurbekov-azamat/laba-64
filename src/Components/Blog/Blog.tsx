import React from 'react';
import {GotBlog} from "../../types";
interface Props {
  post: GotBlog;
  readMore: React.MouseEventHandler;
  deletePost: React.MouseEventHandler;
}
const Blog: React.FC<Props> = ({post, readMore,deletePost}) => {
  return (
    <div className='mt-3 border border-dark p-3'>
      <div className='d-flex justify-content-between'>
        <p className='text-success fw-light'>Created on: {post.date}</p>
        <p className='fw-bold'>Title: {post.title}</p>
      </div>
      <p>Post: {post.text}</p>
      <div className='text-center'>
        <button className='btn btn-primary me-5' onClick={deletePost}>delete</button>
        <button className='btn btn-outline-danger' onClick={readMore}>Read more</button>
      </div>
    </div>
  );
};
export default Blog;