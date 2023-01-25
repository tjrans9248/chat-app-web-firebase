import React from 'react';

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src="" alt="user" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src="" alt="content" /> */}
      </div>
    </div>
  );
};

export default Message;
