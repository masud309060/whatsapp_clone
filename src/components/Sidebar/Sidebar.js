import React from 'react';
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Top Avatar and Icon sidebar-header */}
      <div className="sidebar_header">
          <Avatar src="https://randomuser.me/api/portraits/men/20.jpg"/> 
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div> 
      </div>

      {/* Sidebar Search Box */}
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlined/>
            <input type="text" placeholder="Search of start new chat"/>
          </div>
        </div>

        {/* SidebarChat component here */}
        <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
    </div>
  );
};

export default Sidebar;