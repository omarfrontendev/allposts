import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import SinglePost from '../SinglePost';
import './Posts.scss'

const Posts = () => {

  const posts = useSelector(state => state.posts.posts);

  return (
    <div className='posts__conatiner'>
      {posts.length ? (
        posts.map(post => (
          <SinglePost 
            title={post.title}
            post={post.body}
            id={post.id}
            key={post.id}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  )
}

export default Posts