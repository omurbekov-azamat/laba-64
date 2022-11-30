import React from 'react';
import {GotBlog} from "../../types";
import Blog from "./Blog";

interface Props {
  posts: GotBlog[];
  readMore: (id: string) => void;
  deletePost: (id: string) => void;
}

const Blogs: React.FC<Props> = ({posts,readMore, deletePost}) => {
  return (
    <div>
      {posts.map((item) => (
        <Blog
          post={item}
          key={Math.random() * 99999}
          readMore={() => readMore(item.id)}
          deletePost={() => deletePost(item.id)}
        />
      ))}
    </div>
  );
};

export default Blogs;