import './Default.css'
import { Outlet } from 'react-router-dom'

//Components
import { Sidebar } from '../components/Sidebar'




export function Default(){
    return(
        <div className="layout">
            <Sidebar/>

            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}