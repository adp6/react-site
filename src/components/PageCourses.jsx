import CourseComponent from "./CourseComponent"
import Front from '../img/Front.png'
import Back from '../img/Back.png'
import Full from '../img/Full.png'
function PageCourses(){
    return(
        <div className="mt-5 row containerApp">
            <div className="col-md-4 col-12">
                <CourseComponent course={"Front-End Developer"} img={Front} link={'/front'}></CourseComponent>
            </div>
            <div className="col-md-4 col-12">
                <CourseComponent course={"Back-End Developer"} img={Back} link={'/back'}></CourseComponent>
            </div>
            <div className="col-md-4 col-12">
                <CourseComponent course={"Full Stack Developer"} img={Full} link={'/full'}></CourseComponent>
            </div>
        </div>
    )
    
}
export default PageCourses