import React from 'react';
import {Link} from "react-router-dom";
import {GotBlog} from "../../types";

interface Props {
  post: GotBlog;
}

const Blog: React.FC<Props> = ({post}) => {
  return (
    <div className='mt-3 border border-dark p-3'>
      <div className='d-flex justify-content-between'>
        <p className='text-success fw-light'>Created on: {post.date}</p>
        <p className='fw-bold'>Title: {post.title}</p>
      </div>
      <p>Post: {post.text}</p>
      <div className='text-center'>
        <Link to={'/posts/' + post.id} className='btn btn-danger'>ReadMore</Link>
      </div>
    </div>
  );
};

export default Blog;