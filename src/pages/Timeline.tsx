//Components.
import { Tweet } from '../components/Tweet'
import { TimelineHeader } from '../components/TimelineHeader'
import { Separator } from '../components/Separator'

import "./Timeline.css"
const TweetContent = ["algo", "Meu primeiro tweet", "Tamo junto galera!"]

export function Timeline(){
    return (
        
            <main className="timeline">
                <TimelineHeader title='Home'/>

                <form className='new-tweet-form'>
                    <label htmlFor="tweet">
                        <img src="https://github.com/renan3581.png" alt="Renan Silva" />
                        <textarea id="tweet" placeholder="What's happening?"/>
                    </label>
                    <button type="submit">Tweet</button>
                </form>

                <Separator/>
                
                {TweetContent.map((tweet)=>{
                    return <Tweet content={tweet} key={tweet}/>
                })}
            
            </main>
        
    )
}