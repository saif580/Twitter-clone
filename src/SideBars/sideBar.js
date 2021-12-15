import './sideBar.css'
import Home from './Home/Home'
import Explore from './Explore/Explore'
import Notification from './Notification/Notification'
import Messages from './Messages/Messages'
import Bookmarks from './Bookmarks/Bookmarks'
import Lists from './Lists/Lists'
import Profile from './Profile/Profile'
import More from './More/More'

const SideBar = () => {
  return (
    <div class='sidebar'>
      <i class='fab fa-twitter'></i>
      <Home />
      <Explore />
      <Notification />
      <Messages />
      <Bookmarks />
      <Lists />
      <Profile />
      <More />
      <button class='sidebar__tweet'>Tweet</button>
    </div>
  )
}

export default SideBar
