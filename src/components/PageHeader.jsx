import reactLogo from '../img/logo192.png'
import { NavLink } from "react-router-dom"
import logo from '../img/logo.png'
import OrderBtn from '../UI/orderBtn/OrderBtn'
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useState } from 'react';
import ModalWindow from '../UI/modal/ModalWindow';


function PageHeader(){
    const renderTooltip = props => (
        <Tooltip {...props}>Return to HomePage</Tooltip>
    );
    
    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <div>
            <header>
                <nav className="navbar bg-light">
                    <div className="row container-fluid">
                        <div className='col-sm-6 col-12'>
                        <OverlayTrigger placement="top" overlay={renderTooltip}>
                            <NavLink to='/'><img src={reactLogo} width = '80px' alt='react logo'></img></NavLink>
                        </OverlayTrigger>
                            <NavLink to='/page'><img src={logo} alt="logo" width={300+'px'} className='software'/></NavLink>
        
                        </div>
                        <div className='col-sm-6 col-12 d-flex justify-content-end  align-items-middle menu'>
                            <div className='menu-btn mt-5' onClick={()=>{ToogleMenu()}}>
                                <div className='line xClose'></div>
                                <div className='line xClose'></div>
                                <div className='line xClose'></div>
                            </div>
                            <div className='elHide mobile hide'>
                                <div>
                                   <a href='#about'>About</a> 
                                </div>
                                <div>
                                    <a href='#contact'>Contact</a>
                                </div>
                                <div>
                                    <OrderBtn show={handleShow}></OrderBtn>
                                </div>
                            </div>
                            <div className='gap-5 desktop'>
                                <div>
                                   <a href='#about'>About</a> 
                                </div>
                                <div>
                                    <a href='#contact'>Contact</a>
                                </div>
                                <div>
                                    <OrderBtn show={handleShow}></OrderBtn>
                                </div>
                            </div> 
                                    
                        </div>
                    </div>
                </nav>
            </header>
            {show===true?<ModalWindow close={handleClose} show={show}/>:null}
        </div>
        

    )
   
}
export default PageHeader