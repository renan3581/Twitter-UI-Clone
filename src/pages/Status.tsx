import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Separator } from "../components/Separator"
import { TimelineHeader } from "../components/TimelineHeader"
import { Tweet } from "../components/Tweet"

import "./Status.css"
const tweetTest = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias, nam nihil quidem labore quis rerum impedit temporibus nobis inventore ea tempore obcaecati optio enim ducimus minima cupiditate non adipisci!"
]


export function Status(){

    const [newAnswer,setNewAnswer] = useState('')

    const [answers, setAnswers] = useState(
        [ 
        'Resposta 1',
        'Resposta 2',
        'Resposta 3'
    ])

    function createNewAnswer(ev: FormEvent){
        ev.preventDefault()
        setAnswers([ newAnswer,...answers])
        setNewAnswer('')
    }

    function handleHotkeySubmit(ev: KeyboardEvent){
        if(ev.key === 'Enter' && (ev.ctrlKey /*Windows*/ || ev.metaKey /*MAC*/)){
            ev.preventDefault()
            setAnswers([ newAnswer,...answers])
            setNewAnswer('')
        }
    }
    
    return(
        
        
            <main className="Status">
                <TimelineHeader title='Tweet'/>

                <Tweet content={tweetTest[0]}/>
                <Separator/>

                <form onSubmit={createNewAnswer} className='answer-tweet-form'>
                    <label htmlFor="tweet">
                        <img src="https://github.com/renan3581.png" alt="Renan Silva" />
                        <textarea id="tweet" placeholder="Tweet your answer" 
                        onChange={(ev)=>setNewAnswer(ev.target.value)} 
                        onKeyDown={handleHotkeySubmit}
                        value={newAnswer}/>
                    </label>
                    <button type="submit"><PaperPlaneRight/><span>answer</span></button>
                </form>
    
                
                
                {answers.map((answer)=>{
                    return <Tweet content={answer} key={answer}/>
                })}
            
            </main>
        
    )
}