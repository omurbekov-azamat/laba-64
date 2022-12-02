import React from 'react';
import Blog from "./Blog";
import {GotBlog} from "../../types";

interface Props {
  posts: GotBlog[];
}

const Blogs: React.FC<Props> = ({posts}) => {
  return (
    <>
      {posts.map((item) => (
        <Blog
          post={item}
          key={Math.random() * 99999}
        />
      ))}
    </>
  );
};

export default Blogs;