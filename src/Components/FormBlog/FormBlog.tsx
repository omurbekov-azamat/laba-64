import React, {useState} from 'react';
import {GotBlogApi} from "../../types";

interface Props {
  onSubmit: (blog: GotBlogApi) => void;
  existingBlog?: GotBlogApi;
}

const FormBlog: React.FC<Props> = ({existingBlog, onSubmit}) => {
  const initialState = existingBlog ? {
    ...existingBlog,
  } : {
    title: '',
    text: '',
    date: '',
  };

  const [blog, setBlog] = useState<GotBlogApi>(initialState);

  const onBlogChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setBlog(prev => ({...prev, date: new Date().toString(), [name]: value}));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(blog);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='text-center container border border-dark mt-5 p-5'>
        <h4>{existingBlog ? 'Edit blog' : 'Create new blog'}</h4>
        <div>
          <input
            placeholder='title'
            id='title'
            name='title'
            type="text"
            value={blog.title}
            className='form-control mb-3'
            onChange={onBlogChange}
            required
          />
        </div>
        <div>
          <textarea
            placeholder='blog text...'
            id='text'
            name='text'
            value={blog.text}
            className='form-control mb-3'
            onChange={onBlogChange}
            required
          />
        </div>
        <button className='btn btn-primary'>{existingBlog ? 'Edit' : 'Create'}</button>
      </div>
    </form>
  );
};

export default FormBlog;