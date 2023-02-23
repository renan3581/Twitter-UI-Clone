//Components.
import { Tweet } from '../components/Tweet'
import { TimelineHeader } from '../components/TimelineHeader'
import { Separator } from '../components/Separator'

import "./Timeline.css"
import { FormEvent, useState } from 'react'





export function Timeline(){
    const [newTweet,setNewTweet] = useState('')

    const [tweets, setTweets] = useState(
        ["algo",
        "Meu primeiro tweet", 
        "Tamo junto galera!"])

    function createNewTweet(ev: FormEvent){
        ev.preventDefault()
        setTweets([...tweets, newTweet])
        setNewTweet('')
    }

    return (
        
            <main className="timeline">
                <TimelineHeader title='Home'/>

                <form onSubmit={createNewTweet} className='new-tweet-form'>
                    <label htmlFor="tweet">
                        <img src="https://github.com/renan3581.png" alt="Renan Silva" />
                        <textarea id="tweet" placeholder="What's happening?" onChange={(ev)=>{setNewTweet( ev.target.value) }} value ={newTweet}/>
                    </label>
                    <button type="submit">Tweet</button>
                </form>

                <Separator/>
                
                {tweets.map((tweet)=>{
                    return <Tweet content={tweet} key={tweet}/>
                })}
            
            </main>
        
    )
}