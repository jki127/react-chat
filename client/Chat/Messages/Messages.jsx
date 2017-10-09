import React from 'react';
import './Messages.css';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  renderMessages() {
    let messagesJSX = [];
    if (this.props.messages != null && this.props.messages.length > 0) {
      let messages = this.props.messages;
      messagesJSX = messages.map((message, index) => {
        return <Message text={message.text} key={index} />;
      });
    }
    return messagesJSX;
  }

  render() {
    return <div className="Messages">{this.renderMessages()}</div>;
  }
}

export default Messages;
