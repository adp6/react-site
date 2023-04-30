import styles from "./ViewBtn/ViewBtn.module.css"
function OrderClick({func, msg}){
    return(
        <button className={styles.btn} onClick={()=>{func()}}>{msg}</button>
    )
}
export default OrderClick