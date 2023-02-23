import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import "./Tweet.css"

import {Link} from 'react-router-dom'
interface TweetProps {
    content: string;
}

export function Tweet(props: TweetProps){
    return(

        <Link to="/status" className="tweet">
            <img src="https://github.com/renan3581.png" alt="renan" />
            <div className="tweet-content">
                
                <p>
                    {props.content}
                </p>   

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle/>
                        20
                    </button>
                    <button type="button">
                        <ArrowsClockwise/>
                        20
                    </button>
                    <button type="button">
                        <Heart/>
                        20
                    </button>

                </div>
                
            </div>
        </Link>
        
    )
}