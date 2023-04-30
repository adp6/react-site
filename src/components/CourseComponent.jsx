import styles from "./style/CourseComponent.module.css"
import ViewBtn from '../UI/ViewBtn/ViewBtn'
import { NavLink } from "react-router-dom"

function CourseComponent({course,img,link}){
    const h1Class = `ms-3 pb-4 me-3 ${styles.h1}`
    const divClass = `mb-5 ${styles.div}`
    return(
        <div className={divClass}>
            <img src={img} alt={course} className={styles.img}/>
            <div className="mt-5 mb-3">
                <h1 className={h1Class}>{course}</h1>
                <div className="ms-3">
                    <span className={styles.price}>19,99 USD</span>
                    <div className="mt-3">
                        <NavLink to={link}><ViewBtn msg={'View course'}/></NavLink>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default CourseComponent