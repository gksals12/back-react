import React from 'react';
import { Outlet } from 'react-router-dom';
import { PostsProvider } from '../../../context/PostsContext';

const PostContextList = () => {

  return (
    <PostsProvider>
      <div>배너</div>
      <Outlet>

      </Outlet>
    </PostsProvider>
  );
};

export default PostContextList;