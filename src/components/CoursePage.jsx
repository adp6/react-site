import OrderClick from '../UI/OrderClick';
import PageHeader from './PageHeader'
import Footer from './Footer'
import styles from './style/CoursePage.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function CoursePage({course,img}){
    const h3Style=`mt-5 ${styles.h3} mb-5`

    const [used, block] = useState(false)

    let notify = () => {toast.success('Thanks for your order!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
    block(true)};


    
    if(used){
        notify = () => toast.success('You already made an order!')
    }

    return(
       <div className='bg-page pb-5'>
            <PageHeader/>
            <div className='mt-5'>
                <img src={img} alt={course} width={'100%'}/>
            </div>
            <div className='mt-5'>
                <div className='ms-3'>
                    <h1 className={styles.h1}>{course} developer</h1>
                    <h3 className={h3Style}>Description</h3>
                    <p className={styles.p}>
                        Our {course} Course has been a great fit for many of our students in the past. If this is what you’re looking for, make sure to sign up today. Feel free to reach out with any questions or to learn more.
                    </p>
                    <div className='mt-5'>
                        <OrderClick msg='Order' func={notify}></OrderClick>
                        <ToastContainer 
                            position="top-right"
                            autoClose={5000}
                            limit={1}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                            theme="dark"
                        />
                    </div>
                    
                </div>
            </div>
            <Footer msg={'© 2023 Software Knight. All rights reserved'}/>
        </div> 
    )
    
}
export default CoursePage