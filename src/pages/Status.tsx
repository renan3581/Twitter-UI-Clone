import { Separator } from "../components/Separator"
import { TimelineHeader } from "../components/TimelineHeader"
import { Tweet } from "../components/Tweet"

import "./Status.css"
const tweetTest = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias, nam nihil quidem labore quis rerum impedit temporibus nobis inventore ea tempore obcaecati optio enim ducimus minima cupiditate non adipisci!"
]

const answers = [
    'Resposta 1',
    'Resposta 2',
    'Resposta 3'
]
export function Status(){
    return(
        
        
            <main className="Status">
                <TimelineHeader title='Tweet'/>

                <Tweet content={tweetTest[0]}/>
                <Separator/>

                <form className='answer-tweet-form'>
                    <label htmlFor="tweet">
                        <img src="https://github.com/renan3581.png" alt="Renan Silva" />
                        <textarea id="tweet" placeholder="Tweet your answer"/>
                    </label>
                    <button type="submit">answer</button>
                </form>
    
                
                
                {answers.map((answer)=>{
                    return <Tweet content={answer} key={answer}/>
                })}
            
            </main>
        
    )
}