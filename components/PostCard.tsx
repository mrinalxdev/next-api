import React from 'react'
import moment from 'moment'
import Link from 'next/Link'


const PostCard = ({ post }) => {

  console.log(post)

  return (
    <div className ="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mr-1">
      <div className = "relative overflow-hidden shadow-md pb-80 mb-6">
          <img 
            src = {post.image.url} 
            alt = {post.title}
            className = "object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-l" 
          />
      </div>
      <h1 className = "transition duration-100 text-center mb-8 cursor-pointer hover:text-gray-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>

      <div className = "block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className = "flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img 
            alt = {post.author.name} 
            height = '30px'
            width = '30px'
            className = 'align-middle rounded-full'
            src = {post.author.photo.url}
          />

          <p className = "inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>

        </div>

        <div className = "font-medium text-gray-700 ">
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className = "text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>

      <div className = "text-center">
        <Link href = {`/posts/${post.slug}`}>
          <span className = "transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 text-lg rounded-full font-medium text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard