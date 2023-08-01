import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user:'gustavookagawa',
      postimage: 'https://images.unsplash.com/photo-1621274283140-e4450435a76a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      likes: 12,
      timespamp: '2d',
    },
    {
      user:'benini05',
      postimage: 'https://plus.unsplash.com/premium_photo-1681302501709-33833ae1b715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 12,
      timespamp: '5m',
    },
    {
      user:'okagawagustavo',
      postimage: 'https://plus.unsplash.com/premium_photo-1681302501690-b238058eeb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      likes: 12,
      timespamp: '12h',
    },
    {
      user:'gustavookagawa',
      postimage: 'https://plus.unsplash.com/premium_photo-1681302501690-b238058eeb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      likes: 12,
      timespamp: '2d',
    },
    {
      user:'benini05',
      postimage: 'https://plus.unsplash.com/premium_photo-1681302501690-b238058eeb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      likes: 12,
      timespamp: '5m',
    },
    {
      user:'okagawagustavo',
      postimage: 'https://plus.unsplash.com/premium_photo-1681302501690-b238058eeb8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
      likes: 12,
      timespamp: '12h',
    }
  ]
    
  );
  return (
    <div className='timeline'>
        <div className='timeline__left'>
          <div className='timeline__posts'>
            {posts.map(post => (
              <Post user={post.user} postImage={post.postimage} like={post.likes} timespamp={post.timespamp}/>
            ))}

          </div>
        </div>
        <div className='timeline__right'>
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline