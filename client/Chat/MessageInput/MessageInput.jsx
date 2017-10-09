import React from 'react';
import './MessageInput.css';

class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.sendMessage = this.sendMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  getInput() {
    return document.querySelector('#messageInput').value;
  }

  clearInput() {
    document.querySelector('#messageInput').value = '';
  }

  sendMessage() {
    const text = this.getInput().trim();
    if(text.length > 0){
      const message = JSON.stringify({ message: { text: this.getInput() } });
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/messages', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(message);
      this.clearInput();
      this.props.onNewMessage();
    }
  }

  handleKeyPress(e){
    if(e.key == 'Enter'){
      this.sendMessage();
    }
  }

  render() {
    return (
      <div className="message-input">
        <input id="messageInput" className="message-input__input" type="text" placeholder="Send a message!" onKeyPress={this.handleKeyPress}/>
        <button className="message-input__send-button" onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default MessageInput;
