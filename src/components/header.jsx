import { NavLink } from "react-router-dom"
import reactLogo from '../img/logo192.png'

function Header(){
    let hide = true;
    
    
    function ToogleMenu(){
        let menu = document.querySelector('.elHide')
        let line = document.querySelectorAll('.line')
        hide = !hide
        if(hide){
            menu.classList.add('hide')
            line.forEach((v)=>v.classList.add('xClose'))
        }
        else{
            menu.classList.remove('hide')
            line.forEach((v)=>v.classList.remove('xClose'))
        }

    }
    return(
       <header>
            <nav className="navbar bg-dark">
                <div className="row container-fluid">
                    <div className='col-1'>
                        <img src={reactLogo} width = '80px' alt='react logo'></img>

                    </div>
                    <div className="col-11">
                        <div className='justify-content-around desktop'>
                            <NavLink to='/' className='Link'>Home</NavLink>
                            <NavLink to='/posts' className='Link'>Posts</NavLink>
                            <NavLink to='/api' className='Link'>Rest Api Posts</NavLink>
                            <NavLink to='/page' className='Link'>Commertial Page</NavLink>
                        </div>
                        <div className='d-flex justify-content-end  align-items-middle menu'>
                            <div className='menu-btn mt-5' onClick={()=>{ToogleMenu()}}>
                                <div className='line xClose border-light'></div>
                                <div className='line xClose border-light'></div>
                                <div className='line xClose border-light'></div>
                            </div>
                            <div className='elHide mobile hide'>
                                <div>
                                    <NavLink to='/' className='Link'>Home</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/posts' className='Link'>Posts</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/api' className='Link'>Rest Api Posts</NavLink>
                                </div>
                                <div>
                                    <NavLink to='/page' className='Link'>Commertial Page</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </nav>
        </header> 
    )
    
}

export default Header