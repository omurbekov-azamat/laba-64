import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useLocation} from "react-router-dom";
import Blogs from "../../Components/Blog/Blogs";
import Spinner from "../../Components/Spinner/Spinner";
import {GotBlog, GotBlogList} from "../../types";

const Home = () => {
  const [blogs, setBlogs] = useState<GotBlog[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const fetchBlog = useCallback(async () => {
    try {
      setLoading(true)
      const blogsResponse = await axiosApi.get<GotBlogList>('/blog.json');
      if (blogsResponse.data) {
        const blogs = Object.keys(blogsResponse.data).map(key => {
          const blog = blogsResponse.data[key];
          blog.id = key;
          return blog
        });
        setBlogs(blogs.reverse());
      }
    } finally {
      setLoading(false)
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/posts') {
      fetchBlog().catch(console.error);
    }
  }, [fetchBlog, location]);

  return (
    <>
      {loading ? <Spinner/> : (
        <Blogs posts={blogs}/>
      )}
    </>
  );
};

export default Home;