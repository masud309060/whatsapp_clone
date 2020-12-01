import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css'

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar /> 
      <div className="sidebarChat__info">
        <h4>Room name</h4>
        <p>the last message..</p>
      </div>
    </div>
  );
};

export default SidebarChat;