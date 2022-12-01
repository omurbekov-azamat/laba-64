export interface GotBlog {
  title: string;
  text: string;
  date: string;
  id: string;
}

export type GotBlogApi = Omit<GotBlog, 'id'>

export interface GotBlogList {
  [id: string]: GotBlog;
}