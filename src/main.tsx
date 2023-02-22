import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import './components/global.css'
import twitterLogo from './assets/Logo-twitter.svg'
import { House, Hash, Bell, Envelope, Bookmark, FileText, User, DotsThreeCircle, Sparkle  } from 'phosphor-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
  
  <React.StrictMode>  
    <div className="layout">
      <aside className="sidebar">
        <img src={twitterLogo} alt="Logo" className='logo' />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill"/>
            Home
          </a>

          <a href="">
            <Hash/>
            Explore
          </a>

          <a href="">
            <Bell/>
            Notifications
          </a>

          <a href="">
            <Envelope/>
            Messages
          </a>

          <a href="">
            <Bookmark/>
            Bookmarks
          </a>

          <a href="">
            <FileText/>
            Lists
          </a>

          <a href="">
            <User/>
            Profile
          </a>

          <a href="">
            <DotsThreeCircle/>
            More
          </a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>

      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle/>
          </div>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/renan3581.png" alt="Renan Silva" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type="submit"> Tweet</button>
          </form>
          
        </main>
      </div>
    </div>

  </React.StrictMode>,
)
