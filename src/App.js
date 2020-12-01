import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync')
    .then(res => {
      setMessages(res.data)
    })
  }, [])

  useEffect(() => {
  var pusher = new Pusher('74b449df464dac7b1b64', {
    cluster: 'eu'
  });

  var channel = pusher.subscribe('message');
  channel.bind('inserted', (newMessage) => { 
  setMessages([...messages, newMessage])
  });

  return () => {
    channel.unbind();
    channel.unsubscribe();
  }
  },[messages])

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>  
      </div>
    </div>
  );
}

export default App;
