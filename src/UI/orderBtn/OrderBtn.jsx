import styles from './OrderBtn.module.css'

function OrderBtn({show}){

    return(
        <div>
            <button className={styles.button} onClick={()=>{show()}}>Order a call</button>
        </div>
        
    )
}
export default OrderBtn