import { useState } from 'react';
import Button from '../../componets/Button/Buttton';
import css from './Modalpage.module.scss'


function Modal() {
    const [open, setOpen] = useState(false)

    return (
        <div className={css.ModalContener}>
            <button onClick={() => setOpen(!open)} className={css.btuON}>Open Modal</button>
            {/* <Button name="Clic me" open={open} setOpen={setOpen} />  */}
            
                <div className={`${css.Overlay} ${open ?   css.show : ""}`} >
                    <div className={css.Modal}>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/Octicons-x.svg' alt='' 
                                className={css.imgX} 
                                onClick={() => setOpen(!open)}
                                />
                        </div>
                        <div>
                            <img src='https://i.pinimg.com/originals/1f/58/d2/1f58d204278f70f30242c05329f161e7.gif' alt='' className={css.imgGif}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Modal;