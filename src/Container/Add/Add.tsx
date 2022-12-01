import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import FormBlog from "../../Components/FormBlog/FormBlog";
import Spinner from "../../Components/Spinner/Spinner";
import {GotBlogApi} from "../../types";

const Add = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const createBlog = async (blog: GotBlogApi) => {
    try {
      await axiosApi.post('/blog.json', blog);
      setLoading(true)
    } finally {
      navigate('/posts');
    }
  };

  return (
    <>
      {loading ? <Spinner/> : (
        <FormBlog onSubmit={createBlog}/>
      )}
    </>
  );
};

export default Add;