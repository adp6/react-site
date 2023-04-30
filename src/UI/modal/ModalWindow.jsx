import Modal from 'react-bootstrap/Modal';
import styles from './Modal.module.css'
import OrderClick from '../OrderClick';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function ModalWindow({show,close}){
    const div = `modal show ${styles.div}`;
    const [input,inputChange] = useState('')

    const Err = () => {toast.error('Invalid input')};

    const success = ()=>{
      toast.success('Wait for our call!');
    }
    function confirm(){
      if(input.length<9)Err()
      else{
        success()
        setTimeout(()=>{
          close()
        },2000)
      }
      
    }

    return(
    
    <div 
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={()=>{close()}} className={div}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Phone Number</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className={styles.body}>
                <div className='mb-5'>
                <PhoneInput
                    defaultCountry="UA"
                    onChange={inputChange}
                    value={input}
                />
                <div className='mt-2'>
                  <span>{input}</span>
                </div>
                
                    
                </div>
                <OrderClick msg="confirm" func={confirm}/>
                
            </div>
            
        </Modal.Body>

        
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
    )
}
export default ModalWindow