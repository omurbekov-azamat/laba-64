import React, {useCallback, useEffect, useState} from 'react';
import AxiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";
import FormBlog from "../../Components/FormBlog/FormBlog";
import Spinner from "../../Components/Spinner/Spinner";
import {GotBlogApi} from "../../types";

const EditBlog = () => {
  const [blog, setBlog] = useState<GotBlogApi | null>(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchEditBlog = useCallback(async () => {
    try {
      setLoading(true);
      const blogResponse = await AxiosApi.get<GotBlogApi>('/blog/' + id + '.json');
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
      setLoading(true)
      await AxiosApi.put('/blog/' + id + '.json', blog);
    } finally {
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