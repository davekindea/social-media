import React, { Profiler } from "react";
import Login from "./components/Login-page/Login";
import Register from "./components/Register/Register.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile/Profile.js";
import { Navigate } from "react-router-dom";
import User from "./components/user/user.js";
import SocialMediaStoryPost from "./components/post-page/ppost-page.js";
import SocialMediaPostPage from "./components/post-page/ppost-page.js";
//

import Home from "./components/Home/Home.js";

import Event from './components/Event/event.js';
import Memory from './components/Memory/Memory.js';
import Gallary from './components/Gallary/gallary.js';
import Friends from './components/friends/Friends.js';
import FriendRequests from './components/Friend-request/friend-req.js';
import YouTubeEmbed from './components/Vidoes/Vidoes.js';
import Start from "./components/starting/start.js";
const Router = () => {
  const currentUser = false;
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;

      return children;
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/post",
      element: <SocialMediaPostPage />,
    },
    {
      path: "/story",
      element: <SocialMediaStoryPost />,
    },
    {
    path: "/Home", 
    element: <Home/>
    },
    {
        path: "/Event", 
        element: <Event/>
        },
    {
    path: "/Memory", 
    element: <Memory/>
    },
    {
        path: "/Gallary", 
        element: <Gallary/>
    },
    {
        path: "/friends", 
        element: <Friends/>
    },
    {
        path: "/Friendrequest", 
        element:<FriendRequests/>
    },
    {
        path: "/ouTubeEmbed", 
        element: <YouTubeEmbed/>
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;

