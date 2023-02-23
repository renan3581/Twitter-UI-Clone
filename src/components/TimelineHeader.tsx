import { Sparkle } from 'phosphor-react'
import "./TimelineHeader.css"

interface TimelineHeaderProps {
    title: string;
}

export function TimelineHeader(props: TimelineHeaderProps){
    return (
        <div className="timeline-header">
            {props.title}
            <Sparkle/>
        </div>
    )
}