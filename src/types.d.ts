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

export interface GotContent {
  text: string;
  title: string;
  id: string;
}

export type GotContentApi = Omit<GotAbout, 'id'>
export interface GotContentList {
  [id: string]: GotContent;
}