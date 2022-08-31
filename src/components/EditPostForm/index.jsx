import React from 'react'
import { useState } from 'react'
import { updatePost } from '../../redux/postsSlice';
import { useDispatch } from 'react-redux';

import './EditPostForm.scss'

const EditFormPost = ({ title, id, post, setOpenEdit }) => {

  const [newTitle, setNewTitle] = useState(title || '');
  const [newPost, setNewPost] = useState(post || '');
  const dispatch = useDispatch();

  return (
    <div className='edit'>
      <div className='overlay'></div>
      <form
        className="edit__form"
        onSubmit={e => {
          e.preventDefault()
          dispatch(updatePost({
            id: id,
            title: newTitle,
            body: newPost
          }))
          setOpenEdit(false)
        }}
      >
        <input type='text' placeholder='Type Your Title...' onChange={e => setNewTitle(e.target.value)} value={newTitle} />
        <input type='text' placeholder='Type Your Post...' onChange={e => setNewPost(e.target.value)} value={newPost} />
        <div className="btns">
          <button type='submit'>Save</button>
          <button type='button' onClick={() => setOpenEdit(false)} className='cancel'>cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditFormPost