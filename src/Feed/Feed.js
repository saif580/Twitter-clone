import './Feed.css'
import TweetBox from './TweetBox/TweetBox'
import Post from './Post/Post'

const Feed = () => {
  return (
    <div class='feed'>
      <div class='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
