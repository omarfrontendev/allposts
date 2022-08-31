import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deletePost } from '../../redux/postsSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import EditFormPost from '../../components/EditPostForm';
import './PostDetailsPage.scss'

const PostDetails = () => {

  const [openEdit, setOpenEdit] = useState(false);
  const params = useParams('POSTID').POSTID;
  const posts = useSelector(state => state.posts.posts);
  const idx = posts.findIndex(p => +p.id === +params);
  const currentPost = posts[idx];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className='single__post__page'>
        <Link to={'/allposts'} className='back__btn'>Back</Link>
        <h1 className='signle__title'>{currentPost?.title}</h1>
        <p className='single-post'>{currentPost?.body}</p>
        <div className='single__btns'>
          <button 
            className='delete' 
            onClick={() => {
              dispatch(deletePost({id: currentPost?.id}))
              navigate('/allposts')
            }}
          >
            Delete
          </button>
          <button className='edit__btn' onClick={() => setOpenEdit(true)}>Edit</button>
        </div>
      </div>
      {openEdit && <EditFormPost
        title={currentPost?.title}
        id={currentPost?.id}
        post={currentPost?.body}
        setOpenEdit={setOpenEdit}
      />}
    </>
  )
}

export default PostDetails