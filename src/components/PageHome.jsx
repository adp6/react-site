import styles from './style/PageHome.module.css'
function PageHome(){
    return(
        <div className={styles.body}>
            <h1 className={styles.h1}>
                Welcome
            </h1>
            <div className={styles.div}>
                <p className={styles.p}>A Professional Approach</p>
                <p className={styles.p}>
                    As a student at Software Knight, you’ll enjoy an excellent learning atmosphere and a staff committed to excellence in education. Continue reading to discover our programs, and get in touch with any questions.
                </p>
            </div>
            
        </div>
    )
    
    
}
export default PageHome