import React from 'react'
import './SinglePost.scss'
import { Link } from 'react-router-dom'
const SinglePost = ({ title, post, id }) => {
  return (
    <div className='single__post'>
      <div className='post__header'>
        <h3>{title}</h3>
        <Link to={`/allposts/${id}`}>View</Link>
      </div>
      <p>{post?.length > 100 ? `${post.slice(0, 100)}...` : post}</p>
    </div>
  )
}

export default SinglePost