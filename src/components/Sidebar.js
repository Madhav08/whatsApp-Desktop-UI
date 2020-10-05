import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar__header">
              <div className="sidebar__headerRight">
                <IconButton><Avatar src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/></IconButton>
                <IconButton><DonutLargeIcon /></IconButton>
                <IconButton><ChatIcon /></IconButton>
                <IconButton><MoreVertIcon /></IconButton>
              </div>
          </div>
          <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                <SearchOutlined />
                    <input type='text' placeholder="search or start new chat" />
              </div>
          </div>
          <div className="sidebar__chats">
              <SidebarChat />
              <SidebarChat />
              <SidebarChat />
          </div>
        </div>
    )
}

export default Sidebar
