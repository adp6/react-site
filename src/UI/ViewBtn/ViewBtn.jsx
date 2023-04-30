import styles from "./ViewBtn.module.css"
function ViewBtn({msg}){
    return(
        <button className={styles.btn}>{msg}</button>
    )
}
export default ViewBtn