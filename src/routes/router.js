import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";
import IntroContainer from "../pages/intro/IntroContainer";
import HobbyContainer from "../pages/hobby/HobbyContainer";
import PostListContainer from "../pages/post/list/PostListContainer";
import PostReadContainer from "../pages/post/read/PostReadContainer";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/notFound/NotFound";
import PostContainer from "../pages/post/PostContainer";
import PostContextList from "../pages/post/list/PostContextList";
import PostContextRead from "../pages/post/read/PostContextRead";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <MainContainer></MainContainer>
      },
      {
        path: "/intro",
        element: <IntroContainer></IntroContainer>
      },
      {
        path: "/hobby",
        element: <HobbyContainer></HobbyContainer>,
        children: [
          {
            path: ":hobbies",
            element: <HobbyContainer />,
            children: [
              {
                path: "/hobby/:hobbies/:name",
                element: <HobbyContainer />
              }
              ]
          }
      ]
  },
  {
    path: "/posts",
    element: <PostListContainer />
  },
  {
    path:"/posts/read/:id",
    element: <PostReadContainer />
  },
  {
    path: "/community",
    element: <PostContainer />,
    children: [
      {
        path: "/community",
        element: <PostContextList />
      },
      {
        path: "/community/read/:postId",
        element: <PostContextRead />
      }
    ]
  }
  
    ]
  },
  {
    // 경로가 잘 못되었을때
    path: "*",
    element: <NotFound />
  }
])

export default router;