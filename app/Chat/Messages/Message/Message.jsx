import React from 'react';
import './Message.css';

class Message extends React.Component{
  render(){
    return (
      <div className="Message">
        <span className="author">User Name</span>
        <p className="text">Message Content</p>
      </div>
    );
  }
}

export default Message;
