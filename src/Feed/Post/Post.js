import './Post.css'
import PostAvatar from './PostAvatar/PostAvatar'
import PostImage from './PostImage/PostImage'
import UserName from './UserName/UserName'
import PostDescription from './PostDescription/PostDescription'

const Post = () => {
  return (
    <div class='post'>
      <PostAvatar />
      <div class='post__body'>
        <div class='post__header'>
          <UserName />
          <PostDescription />
        </div>
        <PostImage />
        <div class='post__footer'>
          <span class='material-icons'> repeat </span>
          <span class='material-icons'> favorite_border </span>
          <span class='material-icons'> publish </span>
        </div>
      </div>
    </div>
  )
}

export default Post
