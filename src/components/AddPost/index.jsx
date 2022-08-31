import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsSlice';
import { useSelector } from 'react-redux/es/exports';


import './AddPost.scss'

const AddPost = () => {

  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const posts = useSelector(state => state.posts.posts)
  const dispatch = useDispatch();

  let validate = false;

  if(title !== '' && post !== '') {
    validate = true;
  }

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault()
      dispatch(addPost({
        id: posts.length + 1, 
        title,
        body: post
      }))
      setTitle('')
      setPost('')
    }}>
      <input 
        className='input__form' 
        type="text" 
        name="add__title" 
        id="add__title" 
        placeholder='Your Title...'
       onChange={e => setTitle(e.target.value)}
       value={title}
      />
      <input 
        className='input__form' 
        type="text" 
        name='add__post' 
        id='add__post' 
        placeholder='Add New Post...' 
        onChange={e => setPost(e.target.value)}
        value={post}
      />
      <button className='submit__form' disabled={!validate} type='submit'>Post</button>
    </form>
  )
}

export default AddPost