import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AxiosApi from "../../axiosApi";
import {GotBlogApi} from "../../types";
import Spinner from "../../Components/Spinner/Spinner";
import ReadBlog from "../../Components/ReadBlog/ReadBlog";

const ReadMore = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<GotBlogApi | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOneBlog = useCallback(async () => {
    try {
      setLoading(true);
      const blogResponse = await AxiosApi.get<GotBlogApi>('/blog/' + id + '.json');
      setBlog(blogResponse.data);
    } finally {
      setLoading(false)
    }
  }, [id]);

  useEffect(() => {
    fetchOneBlog().catch(console.error);
  }, [fetchOneBlog]);

  const deletePost = async () => {
    try {
      setLoading(true)
      await AxiosApi.delete('/blog/' + id + '.json');
    } finally {
      navigate('/posts');
    }
  };

  if (loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <>
      {blog && (
        <ReadBlog post={blog} deletePost={deletePost} id={id}/>
      )}
    </>
  );
};

export default ReadMore;