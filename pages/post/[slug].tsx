import React from 'react'
import { getPosts, getPostDetails } from '../ ../services'
import { PostDetail, Categories, PsotWidget, Author, Comments, CommentsForm } from '../ ../components'

const PostDetails = () => {
  return (
    <div className ="container mx-auto px-10 mb-8">
      <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className = "col-span-1 lg:col-sapn-8">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Commetns />
        </div>
        <div className = "col-span-1 lg:col-sapn-4">
          <div className = "relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails