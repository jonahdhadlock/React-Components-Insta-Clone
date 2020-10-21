import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Practice from './practice.js'

const Post = (props) => {
  let [likes, setLikes] = useState(0)
  const increment = () => {
    setLikes(likes + 1)
  };
  const info = () => {
    return <p>Hamburgers</p>
  }
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
                    <Practice myFavoriteFood = {info} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} counter={increment} likes = {likes} />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
