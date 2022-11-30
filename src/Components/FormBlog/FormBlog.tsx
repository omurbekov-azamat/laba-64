import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import {GotBlog} from "../../types";

interface Props {
  button: string;
}

const FormBlog: React.FC<Props> = ({button}) => {
  const [blog, setBlog] = useState<GotBlog>({
    title: '',
    text: '',
    date: '',
    id: Math.random().toString(35),
  });
  const onBlogChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setBlog(prev => ({...prev, [name]: value}));
  };
  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axiosApi.post('/blog.json', blog);
    } finally {
      setBlog({
        title: '',
        text: '',
        date: '',
        id: Math.random().toString(35),
      });
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='text-center container border border-dark mt-5 p-5'>
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
          <input
            id='date'
            name='date'
            type="date"
            value={blog.date}
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
        <button className='btn btn-primary'>{button}</button>
      </div>
    </form>
  );
};

export default FormBlog;