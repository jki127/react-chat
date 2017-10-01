import React from 'react';
import './Chat.css'
import Messages from './Messages/Messages.jsx'
import MessageInput from './MessageInput/MessageInput.jsx';

class Chat extends React.Component {
  render(){
    return (
      <div className="Chat">
        <div className="top-bar">Group Chat</div>
        <Messages />
        <MessageInput />
      </div>
    );
  }
}

export default Chat;
