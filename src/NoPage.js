import { NavLink } from "react-router-dom"

function NoPage(){
    return(
        <div className="center">
            <h1 className="text-danger">Error 404</h1>
            <NavLink to='/' className='Link'>To HomePage</NavLink>
        </div>
    )
}

export default NoPage