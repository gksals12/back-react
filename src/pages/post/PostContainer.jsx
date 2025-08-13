import React, { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';

const PostContainer = () => {
  console.log(useContext(PostsContext))
  return (
    <div>
      배너
    </div>
  );
};

export default PostContainer;