import React from 'react';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="입력하세요" />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
          <button>Send</button>
        </label>
      </div>
    </div>
  );
};

export default Input;
