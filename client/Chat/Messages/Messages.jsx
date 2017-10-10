import React from 'react';
import './Messages.css';
import Message from './Message/Message.jsx';

class Messages extends React.Component {
  componentDidUpdate(){
    // Scroll to the bottom of the messages
    let element = document.getElementById("messageScroll");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

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
    return (
      <div className="Messages">
        <div id="messageScroll" className="Messages__scroll-wrap">
          {this.renderMessages()}
        </div>
      </div>
    );
  }
}

export default Messages;
