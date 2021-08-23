import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io('http://localhost:8000/')

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  console.log('server data',chat);

  useEffect(() => {
    socket.on('message', payload => {
      setChat([...chat, payload])
    })
  })

  const sendMessage = (e) => {
    socket.emit('message', {message})
    setMessage('');
    e.preventDefault();
  }

  return (
    <div>
       <h1>hello</h1>
       {/* <h3>{msg}</h3> */}
   
       <form onSubmit={sendMessage} action="">
          <input 
            type="text" 
            name='message'
            placeholder='Type message'
            value={message}         
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button type='submit'>send</button>
       </form>
       {
         chat.map(chat => <Chat chat={chat}/>)
       }
    </div>
  );
}

export default App;
