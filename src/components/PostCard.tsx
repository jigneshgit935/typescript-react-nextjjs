import React from 'react';

const PostCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <div
      style={{
        width: '45%',
        padding: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid black',
        margin: '5px 0px',
        background: '#bbb',
        borderRadius: '10px',
      }}
    >
      <h1>{title}</h1>
      <p style={{ margin: '8px 0px' }}>{body}</p>
    </div>
  );
};

export default PostCard;
