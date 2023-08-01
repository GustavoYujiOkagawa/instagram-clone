import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'

const Suggestions = () => {
  return (
    <div className='sugessions'>
      <div className='suggestions_title'>Sugestões para você</div>
      <div className='suggestions__usernames'>
        <div className='suggestion__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>g</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>gustavookagawa</span>
              <span className='relation'>Segue você</span>
            </div>
          </div>
          <button className='follow__button'>Seguir</button>
        </div>

        <div className='suggestion__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>g</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>gustavookagawa</span>
              <span className='relation'>Segue você</span>
            </div>
          </div>
          <button className='follow__button'>Seguir</button>
        </div>

        <div className='suggestion__username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>g</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>gustavookagawa</span>
              <span className='relation'>Segue você</span>
            </div>
          </div>
          <button className='follow__button'>Seguir</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions