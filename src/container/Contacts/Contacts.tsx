import React, {useCallback, useEffect, useState} from 'react';
import {GotContent, GotContentList} from "../../types";
import {Outlet, useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import Contents from "../../components/Content/Contents";

const Contacts = () => {
  const [contact, setContact] = useState<GotContent[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const fetchContact = useCallback(async () => {
    try {
      setLoading(true);
      const contactResponse = await axiosApi.get<GotContentList>('/contacts.json');
      const getContact = Object.keys(contactResponse.data).map(key => {
        const addContact = contactResponse.data[key];
        addContact.id = key;
        return addContact;
      });
      setContact(getContact);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/contacts') {
      fetchContact().catch(console.error);
    }
  }, [fetchContact, location]);

  return (
    <>
      {loading ? <Spinner/> : (
        <div className='d-flex'>
          <Contents someContents={contact} link='fix-contacts/' button='Fix Contact'/>
          <Outlet/>
        </div>
      )}
    </>
  );
};

export default Contacts;