import * as SC from '../Modal/Modal.styled'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectModalData } from "redux/modal/modal.selector"
import { closeModal } from "redux/modal/modal.slice"



export const Modal = () => {
    const dispatch = useDispatch()
    const modalData = useSelector(selectModalData)
   

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                dispatch(closeModal())
            }
        }
         window.addEventListener('keydown', handleKeyDown)
         document.body.style.overflow = 'hidden'

         return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'auto'
         }
    },[dispatch])

    const handleOverlayClick = e => {
        if(e.target === e.currentTarget) {
            dispatch(closeModal())
        }
    }

  

    return (
        <SC.Overlay onClick={handleOverlayClick}>
          <div className="modal">
            <button onClick={() => dispatch(closeModal())} >
              ❌
            </button>
            <h2>title</h2>
           
           
          </div>
        </SC.Overlay >
      );
}