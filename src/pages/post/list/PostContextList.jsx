import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PostsContext, PostsProvider } from '../../../context/PostsContext';

const PostContextList = () => {
  // console.log(useContext(PostsContext))
  const {state, actions, error, loading, refetch} = useContext(PostsContext)

  const postList = state.posts && state.posts.map(({title, id}, i) => (
    <li key={i}>
      <Link to={`/community/read/${id}`}>{title}</Link>
    </li>
  ))
  return (
   <div>
    {postList}
   </div>
  );
};

export default PostContextList;