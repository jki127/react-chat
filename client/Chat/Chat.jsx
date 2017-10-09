import React from 'react';
import './Chat.css';
import Messages from './Messages/Messages.jsx';
import MessageInput from './MessageInput/MessageInput.jsx';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages() {
    window.fetch('/messages').then(response => {
      response.json().then(messages => {
        this.setState({ messages: messages });
      });
    });
  }

  handleNewMessage() {
    this.fetchMessages();
  }

  render() {
    return (
      <div className="Chat">
        <div className="top-bar">Group Chat</div>
        <Messages messages={this.state.messages} />
        <MessageInput onNewMessage={this.handleNewMessage} />
      </div>
    );
  }
}

export default Chat;
