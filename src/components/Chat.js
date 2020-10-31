import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import React from 'react'
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                
                <div className="chat__headerInfo">
                    <h3>Room Number</h3>
                    <p>last seen at...</p>
                </div>

                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
                
            <div className="chat__body">
            <p className="chat__message">
                <span className="chat__name">Chandler</span>
                Message comes here
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>

            <p className="chat__message chat__reciever">
                <span className="chat__name">Chandler</span>
                Message comes here
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>

            <p className="chat__message">
                <span className="chat__name">Chandler</span>
                Message comes here
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
            </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon /> 
                <form>
                    <input type="text" placeholder="Type a message" />
                <button type="submit">
                    Send a message
                </button>
                    <MicIcon />
                </form>
            </div> 
        </div>

    )
}

export default Chat
