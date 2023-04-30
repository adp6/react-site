import Header from "./components/header";
import Footer from './components/Footer';
import reactLogo from './img/logo192.png'
import styles from './components/style/HomePage.module.css'
import MovingBg from "./components/MovingBg";

function HomePage(){
    const pClass = `word-break mt-4 ${styles.p}`
    return(
        <div className={styles.body}>
            <MovingBg/>
            <Header/>
                <div className='containerApp'>
                    <div className="row mt-5 pt-5">
                        <h1 className={styles.h1}>Welcome!!!</h1>
                        <p className={pClass}>
                            Hi&#9995;, this is my ReactJS project in which I'm gonna use everything I know about React. Visit the "Commertial Page" to view the most interesting part, but you can also come back anytime ( just click on react logo<img src={reactLogo} width='30px' alt="logo"></img> ).
                        </p>
                    </div>
                    <div className='mb-3'>
                        <h1 className="react-h1">In this application I used:</h1>
                        <ol>
                            <li className="li-big">React</li>
                            <li className="li-big">Bootstrap</li>
                            <li className="li-big">Axios</li>
                            <li className="li-big">React Router</li>
                            <li className="li-big">React-bootstrap</li>
                            <li className="li-big">React-toastify</li>
                            <li className="li-big">react-phone-number-input</li>
                            <li className="li-big">react-transition-group</li>
                        </ol>
                    </div>
                </div>
            <Footer msg={'© 2023 Volodymyr Kucherenko. All rights reserved.'}/>
        </div>
    )
}
export default HomePage