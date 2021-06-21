import React from 'react';
//import SendIcon from '@material-ui/icons/Send';
import './Input.css';


const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
      <input
      className="input"
      type="text"
      placeholder="Type a message... "
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
   <button className="sendButton" onClick={e => sendMessage(e)}>SEND</button>
  </form>
)

export default Input;