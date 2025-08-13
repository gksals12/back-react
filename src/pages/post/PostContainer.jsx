import React, { useContext } from 'react';
import { PostsProvider } from '../../context/PostsContext';
import { Outlet } from 'react-router-dom';

const PostContainer = () => {
  return (
     <PostsProvider>
      <div>배너</div>
      <Outlet context={"name: 홍길동"}>

      </Outlet>
    </PostsProvider>
  );
};

export default PostContainer;