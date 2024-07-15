import React from 'react'
import "./chats.css"
import { Outlet } from 'react-router-dom'

const Chat = () => {
  return (
    <div className="chat-ui">
      <Outlet/>
    </div>
  )
}

export default Chat