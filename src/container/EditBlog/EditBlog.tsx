import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";
import FormBlog from "../../components/FormBlog/FormBlog";
import Spinner from "../../components/Spinner/Spinner";
import {GotBlogApi} from "../../types";

const EditBlog = () => {
  const [blog, setBlog] = useState<GotBlogApi | null>(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchEditBlog = useCallback(async () => {
    try {
      setLoading(true);
      const blogResponse = await axiosApi.get<GotBlogApi>('/blog/' + id + '.json');
      setBlog(blogResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchEditBlog().catch(console.error);
  }, [fetchEditBlog]);

  const editBlog = async (blog: GotBlogApi) => {
    try {
      setLoading(true);
      await axiosApi.put('/blog/' + id + '.json', blog);
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

  if (loading) {
    return (
      <Spinner/>
    )
  }

  return (
    <div>
      {blog && (
        <FormBlog onSubmit={editBlog} existingBlog={blog}/>
      )}
    </div>
  );
};

export default EditBlog;