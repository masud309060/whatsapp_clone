import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React, { useEffect, useState } from 'react';
import './Chat.css'
import axios from '../../axios'

const Chat = ({messages}) => {

  const [input , setInput] = useState('')
  const sendMessage = (e) => {
    e.preventDefault()
    const today = new Date();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    axios.post("/messages/new", {
      message: input,
      name: 'Demo app',
      timestamp: time,
      received: false
    });

    setInput('')
  }

  
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
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
      </div>
      <div className="chat__body" onChange={useEffect(() => {
        window.scrollTo(110, 100000)
      },[]) }>
        {
          messages.map(message => (
            <p className={`chat__message ${message.received && 'chat__receiver'}`} key={message._id}>
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>

          ))
        }
      </div>

      <div className="chat__footer">
        <InsertEmoticon /> 
        <form>
          <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          type = "text" 
          placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;