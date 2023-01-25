import React from 'react';
import Cam from '../../images/camera.png';
import Add from '../../images/edit.png';
import More from '../../images/more.png';
import Messages from './Messages';
import Input from './Input';
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Mike</span>
        <div className="chatIcons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
