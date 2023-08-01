import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

const Post = ({user, postImage, like, timespamp}) => {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__headerAuthor'>
            <Avatar>{user.charAt(0)}</Avatar>
            {user} • <span>{timespamp}</span>
            </div>

            <MoreHorizIcon/>
           
        </div>
        <div className='post__image'>
            <img src={postImage} alt='' />
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='post_iconsMain'>
                    <div className='icon'><FavoriteBorderIcon className='PostIcon'/></div>
                    <div className='icon'><ChatBubbleOutlineRoundedIcon className='PostIcon'/></div>
                    <div className='icon'> <SendRoundedIcon className='PostIcon'/></div>
                    
                </div>
                <div className='post__iconsSave'>
                <BookmarkBorderRoundedIcon className='PostIcon'/>
                </div>
            </div>
            
        </div>
        Curtido por {like} e outras pessoas.
    </div>
  )
}

export default Post