import React, {useState} from 'react';
import Post from './Post';
import './Posts.css';

  // const { likePost, posts, userData } = props;
  const Posts = props => {
  return (
    <div className='posts-container-wrapper'>
      {props.userData.map(data => { return <Post key={data.id} post={data} />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
