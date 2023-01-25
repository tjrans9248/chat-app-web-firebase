import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="유저찾기" />
      </div>
      <div className="userChat">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTgyJUFDJUVCJTlFJThDfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          alt="user"
        />
        <div className="userChatInfo">
          <span>genie</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
