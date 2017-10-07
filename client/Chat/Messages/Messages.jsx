import React from 'react';
import './Messages.css';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  render(){
    return (
      <div className="Messages">
        <Message />
      </div>
    );
  }
}

export default Messages;
