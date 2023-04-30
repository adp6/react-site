import styles from './style/Contact.module.css'

function Contact(){
    const styleDiv = `col-md-6 col-12 ${styles.bgImg}`
    const bodyStyle = `${styles.bg} row mt-5`
    return(
        <div className={bodyStyle}>
            <div className="col-md-6 col-12 text-center mt-5 pt-5">
                <h1 className={styles.h1}>CONTACT</h1>
                <p className={styles.p}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className={styles.p}>
                    Lorem@gmail.com
                </p>
                <p className={styles.p}>
                    123-456-7890
                </p>
            </div>
            <div className={styleDiv}>
            </div>
        </div>
    )
}
export default Contact