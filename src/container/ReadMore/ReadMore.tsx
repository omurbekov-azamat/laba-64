import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ReadBlog from "../../components/ReadBlog/ReadBlog";
import {GotBlogApi} from "../../types";

const ReadMore = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<GotBlogApi | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOneBlog = useCallback(async () => {
    try {
      setLoading(true);
      const blogResponse = await axiosApi.get<GotBlogApi>('/blog/' + id + '.json');
      setBlog(blogResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOneBlog().catch(console.error);
  }, [fetchOneBlog]);

  const deletePost = async () => {
    try {
      setLoading(true)
      await axiosApi.delete('/blog/' + id + '.json');
    } finally {
      setLoading(false);
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