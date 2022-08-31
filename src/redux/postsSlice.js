import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload)
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(p => p.id !== action.payload.id)
    },
    updatePost: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.posts.map(post => {
        // eslint-disable-next-line eqeqeq
        if(post.id == action.payload.id) {
          post.title = action.payload.title;
          post.body = action.payload.body
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost, getPosts, deletePost, updatePost } = postsSlice.actions

export default postsSlice.reducer