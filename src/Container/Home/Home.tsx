import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import Blogs from "../../Components/Blog/Blogs";
import {GotBlog} from "../../types";

const Home = () => {
  const [blog, setBlog] = useState<GotBlog[]>([]);

  const fetchBlog = useCallback(async () => {
    const arrayBlog: GotBlog[] = [];
    const blogsResponse = await axiosApi.get<GotBlog[]>('/blog.json');

    for (let key in blogsResponse.data) {
      const test = {
        id: key,
        title: blogsResponse.data[key].title,
        text: blogsResponse.data[key].text,
        date: blogsResponse.data[key].date
      }
      arrayBlog.push(test);
    }
    setBlog(arrayBlog.reverse());
  }, []);

  useEffect(() => {
    fetchBlog().catch(console.error);
  }, [fetchBlog]);


  const changePost = (id: string) => {
    console.log(id)
  }

  const deletePost = async (id: string) => {
    await axiosApi.delete('/blog/' + id + '.json');
    await fetchBlog().catch(console.error);
  };

  return (
    <div className='container'>
      <Blogs
        posts={blog}
        readMore={changePost}
        deletePost={deletePost}
      />
    </div>
  );
};

export default Home;