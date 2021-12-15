import SideBar from './SideBars/sideBar'
import './App.css'
import Feed from "./Feed/Feed";
import Widget from './Widget/Widget';

function App () {
  return (
    <div>
      <div className='row'>
        <div className='column left'>
          <SideBar />
        </div>
      </div>
      <div className='row'>
        <div className='column middle'>
        <Feed />
        </div>
      </div>
      <div className='row'>
        <div className='column right'>
        <Widget />
        </div>
      </div>
    </div>
  )
}

export default App
