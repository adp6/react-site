import PageHeader from "../components/PageHeader"
import PageHome from "../components/PageHome"
import Footer from '../components/Footer'
import PageCourses from "../components/PageCourses"
import About from "../components/About"
import Contact from "../components/Contact"

function Page(){
    return(
        <div className="page-bg">
            <PageHeader/>
            <PageHome/>
            <div className="mt-5 pt-5 pb-5">
                <PageCourses/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id='contact' className="containerApp pt-5 mt-5">
                <Contact/>
            </div>
            <Footer msg={'© 2023 Software Knight. All rights reserved'}/>
        </div>
    )
}
export default Page