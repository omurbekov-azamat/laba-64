import React from 'react';
import {Link} from "react-router-dom";
import {GotContent} from "../../types";

interface Props {
  shortContent: GotContent;
  link: string;
  button: string;
}

const Content: React.FC<Props> = ({shortContent,link,button}) => {
  return (
    <div className='text-center'>
      <h3 className='mt-5 fs-1'>{shortContent.title}</h3>
      <p className='mb-5'>{shortContent.text}</p>
      <Link to={link + shortContent.id} className='btn btn-primary'>{button}</Link>
    </div>
  );
};

export default Content;