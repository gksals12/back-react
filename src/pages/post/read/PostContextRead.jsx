import React, { useContext } from 'react';
import { PostsContext } from '../../../context/PostsContext';
import { useOutletContext, useParams } from 'react-router-dom';

const PostContextRead = () => {
  const name = useOutletContext()
  console.log(name)
  const {postId} = useParams()
  const {state, actions, error, loading, refetch} = useContext(PostsContext)
  // console.log(id)
  // console.log(state.posts.find((post) => post.id === Number(postId)))

  if(!loading) return <p>로딩중</p>
  const post = state.posts?.find((post) => post.id === Number(postId))
  if(!post) return <p>게시물이 없습니다</p>
  const {id, title, body} = post;
  // console.log(post)
  return (
    <div>
      <p>이름:{name}</p>
      <p>제목: {title}</p>
      <p>내용: {body}</p>
      <p>아이디: {id}</p>
    </div>
  );
};

export default PostContextRead;