import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostListContainer = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const getPosts =  async () =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      return data
    }

    getPosts()
      .then((posts) => posts.slice(0,30))
      .then(setPosts)
      .catch(console.error)

  }, [])

  const postList = posts.map(({id, title}, i) => (
    <li key={i}>
      <Link to={`/posts/read/${id}`}>
        제목: {title}
      </Link>
    </li>
  ))

  return (
    <div>
      게시판
      {postList}
    </div>
  );
};

export default PostListContainer;