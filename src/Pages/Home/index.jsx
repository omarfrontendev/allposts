import React from 'react'
import AddPost from '../../components/AddPost'
import Posts from '../../components/Posts'
import './Home.scss'

const Home = () => {
  return (
    <div className='home__page'>
      <AddPost />
      <Posts />
    </div>
  )
}

export default Home