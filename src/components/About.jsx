import styles from './style/About.module.css'
function About(){
    const bodyClass = `text-center mt-5 ${styles.body} containerApp`
    const pClass = `${styles.p} fw-bold mb-5`
    return(
        <div className={bodyClass}>
            <h1 className={styles.h1}>About</h1>
            <div className='container'>
               <p className={pClass}>
                    Unlock Your Capabilities
                </p>
                <p className={styles.p}>
                    Over the years, our reputation has grown as our graduates go on to become knowledgeable professionals in the field. Through engaging and hands-on educational opportunities, Software Knight continuously cultivates future industry leaders. If this is what you’re looking for, please don’t hesitate to get in touch to learn more and join our growing community.
                </p> 
            </div>
            
        </div>
    )
}
export default About