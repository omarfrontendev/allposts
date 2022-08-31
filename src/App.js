import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/postsSlice';

import Home from './Pages/Home'
import PostDetailsPage from './Pages/PostDetailsPage'
import axios from 'axios'

import './style.scss'
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(getPosts(posts.data))
    })();
  }, [dispatch])


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allposts' element={<Home />} />
      <Route path='/allposts/:POSTID' element={<PostDetailsPage />} />
    </Routes>
  )
}

export default App
