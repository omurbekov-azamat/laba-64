import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {GotContent, GotContentApi} from "../../types";

interface Props {
  link: string;
  setNavigate: string;
  button: string;
}

const FixForm: React.FC<Props> = ({link, setNavigate, button}) => {
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState<GotContentApi>({
    title: '',
    text: '',
  });

  const fetchEditContent = useCallback(async () => {
    try {
      setLoading(true);
      const contentResponse = await axiosApi.get<GotContent>(link + id + '.json');
      setContent(contentResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setContent(prev => ({...prev, [name]: value}));
  };

  useEffect(() => {
    fetchEditContent().catch(console.error);
  }, [fetchEditContent]);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosApi.put(link + id + '.json', content);
    } finally {
      setLoading(false);
      navigate(setNavigate);
    }
  };

  if (loading) {
    return (
      <div
        className="spinner-border text-primary bg-light"
        role="status"
        style={{margin: '200px 0 0 200px', width: '100px', height: '100px'}}
      >
      </div>
    )
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='mt-5 p-2'>
        <div className='mb-5' style={{width: '500px'}}>
          <input
            id='title'
            name='title'
            type="text"
            value={content.title}
            className='form-control'
            onChange={onContentChange}
            required
          />
        </div>
        <div>
        <textarea
          id='text'
          name='text'
          value={content.text}
          className='form-control mb-5'
          onChange={onContentChange}
          required
        />
        </div>
        <div className='text-center'>
          <button className='btn btn-danger'>{button}</button>
        </div>
      </div>
    </form>
  );
};

export default FixForm;