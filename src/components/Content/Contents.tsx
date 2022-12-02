import React from 'react';
import Content from "./Content";
import {GotContent} from "../../types";

interface Props {
  someContents: GotContent[];
  link: string;
  button: string;
}

const Contents: React.FC<Props> = ({someContents,link, button}) => {
  return (
    <div className='d-flex flex-column'>
      {someContents.map((item) => (
        <Content
          key={Math.random()}
          shortContent={item}
          link={link}
          button={button}
        />
      ))}
    </div>
  );
};

export default Contents;