import React, {useCallback, useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import Contents from "../../components/Content/Contents";
import {GotContent, GotContentList} from "../../types";

const About = () => {
  const [about, setAbout] = useState<GotContent[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const fetchAbout = useCallback(async () => {
    try {
      setLoading(true);
      const aboutResponse = await axiosApi.get<GotContentList>('/about.json');
      const getAbout = Object.keys(aboutResponse.data).map(key => {
        const addAbout = aboutResponse.data[key];
        addAbout.id = key;
        return addAbout;
      });
      setAbout(getAbout);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    if (location.pathname === '/about') {
      fetchAbout().catch(console.error);
    }
  }, [fetchAbout, location]);

  return (
    <>
      {loading ? <Spinner/> : (
        <div className='d-flex'>
          <Contents someContents={about} link='fix-about/' button='Fix About'/>
          <Outlet/>
        </div>
      )}
    </>
  );
};

export default About;